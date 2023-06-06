import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Business } from '../lib/business';
import { BusinessService } from '../service/business.service';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-business-list',
    templateUrl: './business-list.component.html',
    styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private businessService: BusinessService,
    private location: Location
  ) { }

  businesses: Business[] = [];      // initializing a Business[] type variable, for use in the HTML

  metroAliveURL = environment.metroAliveURL

  ngOnInit(): void {
      this.activatedRoute.url.subscribe((url: UrlSegment[]) => this.getBusinessList(Number(url[1]?.path))) // watch for changes to the URL
  }

  getBusinessList(templateId: number): void {          // Calling this function generates a list of Businesses that share a template based on route parameters
      // this.businesses = this.businessService.getBusinessList(templateId)  // assigning the output of businessService as a Business[] interface
      this.businessService.get(templateId).subscribe((businesses: Business[]) => {
        console.log(businesses)
        this.businesses = businesses
      })
  }

  goBack(): void {
      this.location.back();
  }
}
