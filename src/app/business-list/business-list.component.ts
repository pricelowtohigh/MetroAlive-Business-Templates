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

  business: Business | undefined;
  businesses?: BusinessList | Array<Business>;

  constructor(
    private route: ActivatedRoute,
    private businessService: BusinessService, //NEED TO CREATE businessService component, this will retrieve list of business based on :templateId param
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBusiness();
  }

  getBusiness() : void {
    const templateId = Number(this.route.snapshot.paramMap.get('templateId'));
    this.businessService.getBusiness(templateId)
  }

  goBack() : void {
    this.location.back();
  }

}
