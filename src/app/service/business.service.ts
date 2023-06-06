import { Injectable } from '@angular/core';
import { Business } from '../lib/business';
import { BUSINESSES } from '../lib/businesses';
import { Observable, map } from 'rxjs';
import { Template } from '../lib/template';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SimpleGetResult } from '../lib/simpleGetResult';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BusinessService {

    constructor(
        private httpClient: HttpClient
    ) { }

    getAllBusinesses(): any {
        // Construct API call here
    }

    getBusinessList(templateId: number): any {        // 'getBusinessList' takes in a templateId (from route params) and returns a list of businesses that share that templateId
        const businessesList = BUSINESSES.filter((business: Business) => {      // *** FUNCTION RETRIEVES BUSINESS DATA FROM LOCAL MEMORY, NOT FROM DATABASE ***
            return business.templateId == templateId;
        });

        this.get(templateId).subscribe(businesses => {
            console.log(businesses)
        })

        return businessesList;
    }

    public get(templateId: number): Observable<Business[]> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'text/plain',
            }),
        }

        return this.httpClient
            // makes call to api
            .post<SimpleGetResult>(
                environment.dataManURL,
                {
                    method: 'simpleget',
                    command: 'Template_GetBusinessList',
                    parameters: {
                        templateId
                    },
                },
                httpOptions
            )
            .pipe(map((results) => {
                return results.data
            }))
    }

}
