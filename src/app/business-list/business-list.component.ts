import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Business } from '../business';
import { BusinessService } from '../service/business.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent implements OnInit {

  businesses: Business[] = [];      // initializing a Business[] type variable, for use in the HTML

  constructor(
    private activatedRoute: ActivatedRoute,
    private businessService: BusinessService,
    private location: Location
  ) {}

  ngOnInit(): void {

    /*
      CSF : 6/2/23
      the call to getBusinessList() and the subsequent call to the route snapshot worked because
      the href in "app.component.html" caused the page to reload each time.  by using routerLink, we avoid
      having to reload the page each time.  this page's ngOnInit should only get called once.  but now we
      need to watch (subscribe to) the active route so we become aware of changes to the url.
    */

    this.activatedRoute.url.subscribe((url: UrlSegment[]) => this.getBusinessList(Number(url[1].path))) // watch for changes to the URL
  }

  getBusinessList(templateId: number) : void {          // Calling this function generates a list of Businesses that share a template based on route parameters
    this.businesses = this.businessService.getBusinessList(templateId)  // assigning the output of businessService as a Business[] interface
  }

  goBack() : void {
    this.location.back();
  }

}
