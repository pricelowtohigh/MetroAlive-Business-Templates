import { Component, OnInit } from '@angular/core';
import { BusinessesComponent } from '../businesses/businesses.component';
import { Business } from '../business';
import { BUSINESSES } from '../businesses';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BusinessService } from '../business.service';
import { BusinessList } from '../businessList';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent implements OnInit {

  businesses: Business[] = [];      // initializing a Business[] type variable, for use in the HTML
  
  constructor(
    private route: ActivatedRoute,
    private businessService: BusinessService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBusinessList();
    // this.route.subscribe  need to 'subscribe' to ActivatedRoute to re-render component when route params change
  }

  getBusinessList() : void {          // Calling this function generates a list of Businesses that share a template based on route parameters
    const templateId = Number(this.route.snapshot.paramMap.get('templateId'));      // pulling the templateId from the URL
    this.businesses = this.businessService.getBusinessList(templateId)  // assigning the output of businessService as a Business[] interface
  }

  goBack() : void {
    this.location.back();
  }

}