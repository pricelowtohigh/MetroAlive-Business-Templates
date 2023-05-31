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

  business: Business | undefined;                   // Assigning the 'Business' interface to a variable ???
  businesses?: BusinessList | Array<Business>;      // Assigning the 'BusinessList' interface to a variable ??? I believe this allows the getBusinessList function to write store its output somewhere. This variable is then accessed in the HTML.
                                                    // What I don't understand fully, is how getBusinessList knows to store its output here. Is it because the output matches the format described by the 'BusinessList' interface?
  constructor(
    private route: ActivatedRoute,
    private businessService: BusinessService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBusinessList();
  }

  getBusinessList() : void {          // Calling this function generates a list of Businesses that share a template based on route parameters
    const templateId = Number(this.route.snapshot.paramMap.get('templateId'));      // pulling the templateId from the URL
    this.businessService.getBusinessList(templateId)        // calling the function, passing in the templateId
  }

  goBack() : void {
    this.location.back();
  }

}