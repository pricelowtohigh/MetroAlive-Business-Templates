import { Component, OnInit } from '@angular/core';
import { Business } from '../business';
import { BUSINESSES } from '../businesses';
import { BusinessService } from '../business.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent implements OnInit {  

  businesses: Business[] = [];

  constructor(private businessService: BusinessService) {}

  ngOnInit(): void {
    this.getBusinesses() 
  }

  getBusinesses(): void {                                               // calls 'getBusinesses' from businessService, retrieves full list of Businesses
    this.businessService.getBusinesses()
    .subscribe((businesses: Business[]) => this.businesses = businesses)
  }

}
