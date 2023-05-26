import { Component, OnInit } from '@angular/core';
import { Business } from '../business';
import { BUSINESSES } from '../businesses';
import { Template } from '../template';
import { TEMPLATES } from '../templates';
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
    this.getBusinesses() // from businessService
  }

  getBusinesses(): void {
    this.businessService.getBusinesses()
    .subscribe((businesses: any) => this.businesses = businesses)
  }

}
