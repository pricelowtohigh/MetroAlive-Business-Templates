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
    const businessesList = BUSINESSES.map((business: any) => {
      if (business.templateId == templateId) {
        return business                             // For some reason, this returns an array the same size as its input, but with each index where 'business.templateId !== templateId' the function overwrites the data with 'undefined'
      }                                             // I've never had this issue with a .map function before, leading me to believe this has something to do with the fact that I am working with typescript interfaces.
    });     
    const businessList = businessesList.filter(business => business)    // This function is a band-aid that removes all each 'undefined' array item

    console.log(businessList)     // Based on what is logged to the console, it seems that this function appropriately outputs an array of Objects. However, it seems to behave like an object when I try to
    return businessList;
  }

   //This function, rather than pulling from the Businesses.ts file directly, it uses the output of 'getBusinesses' instead. It does not work, however, because .map and .filter do not work on the 'Observable<Business[]>' type output.
   getBusinessListAlternate(templateId: number): any {        
    const businessesList = this.getBusinesses()
    businessesList.map((business: any) => {
      if (business.templateId == templateId) {
        return business
      }
    });
    const businessList = businessesList.filter(business => business)
    console.log(businessList)     
    return businessList;
  }
  

}
