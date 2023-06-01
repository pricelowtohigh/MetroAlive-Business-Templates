import { Injectable } from '@angular/core';
import { Business } from './business';
import { BUSINESSES } from './businesses';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  ngOnInit(): void {      // Calling getBusinesses to use its output in 'getBusinessListAlternate'
    this.getBusinesses();
  }

  getBusinesses(): Observable<Business[]> {       // Calling 'getBusinesses' will retrieve every business in 'businesses.ts' currently. Eventually this will be a GET html request that retrieves data dynamically.
    const businesses = of(BUSINESSES);
    return businesses
  }

  getBusinessList(templateId: number): any {        // 'getBusinessList' takes in a templateId (from route params) and returns a list of businesses that share that templateId 
    const businessesList = BUSINESSES.filter((business: Business) => {
      return business.templateId == templateId;
    });

    console.log(businessesList);
    return businessesList;
  }

   //This function, rather than pulling from the Businesses.ts file directly, it uses the output of 'getBusinesses' instead. It does not work, however, because .map and .filter do not work on the 'Observable<Business[]>' type output.
   /*getBusinessListAlternate(templateId: number): any {        
    const businessesList = this.getBusinesses()
    businessesList.map((business: any) => {
      if (business.templateId == templateId) {
        return business
      }
    });
    const businessList = businessesList.filter(business => business)
    console.log(businessList)     
    return businessList;
  }*/
  

}
