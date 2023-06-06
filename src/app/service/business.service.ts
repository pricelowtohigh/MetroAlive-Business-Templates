import { Injectable } from '@angular/core';
import { Business } from '../lib/business';
import { BUSINESSES } from '../lib/businesses';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BusinessService {

    getAllBusinesses(): any {
        // Construct API call here
    }

    getBusinessList(templateId: number): any {        // 'getBusinessList' takes in a templateId (from route params) and returns a list of businesses that share that templateId
        const businessesList = BUSINESSES.filter((business: Business) => {      // *** FUNCTION RETRIEVES BUSINESS DATA FROM LOCAL MEMORY, NOT FROM DATABASE ***
            return business.templateId == templateId;
        });
        console.log(businessesList);
        return businessesList;
    }

}
