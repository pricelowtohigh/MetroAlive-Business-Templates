import { Component } from '@angular/core';
import { BusinessesComponent } from '../businesses/businesses.component';
import { Business } from '../business';
import { BUSINESSES } from '../businesses';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent {

  constructor(
    private route: ActivatedRoute,
    private businessService: BusinessService, //NEED TO CREATE businessService component, this will retrieve list of business based on :templateId param
    private location: Location
  ) {}

  businesses = BUSINESSES;

  ngOnInit(): void {
    this.getBusiness() // from businessService
  }

  getBusiness(): void {
    const tempalteId = Number(this.route.snapshot.paramMap.get('id'))
    this.businessService.getBusiness(id)
      .subscribe(business => this.businesses = businesses)
  }

}
