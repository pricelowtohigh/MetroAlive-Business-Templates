import { Injectable } from '@angular/core';
import { Business } from './business';
import { BUSINESSES } from './businesses';
import { Observable, of } from 'rxjs';
import { BusinessList } from './businessList';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  getBusinesses(): Observable<Business[]> {
    const businesses = of(BUSINESSES);
    return businesses
  }

  getBusiness(templateId: number): any {
    const businessesList = BUSINESSES.map((business: any) => {
      if (business.templateId == templateId) {
        return business
      }
    });
    const businessList = businessesList.filter(business => business)
    console.log(businessList)
    return businessList;
  }

}
