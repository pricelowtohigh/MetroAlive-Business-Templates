import { Injectable } from '@angular/core';
import { Business } from '../lib/business';
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
