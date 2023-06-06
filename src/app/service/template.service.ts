import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Injectable } from '@angular/core';
import { Template } from '../lib/template';

@Injectable({
    providedIn: 'root'
})

export class TemplateService {

    constructor(
        private httpClient: HttpClient
    ) { }

    public get(): Observable<Template[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'text/plain',
            }),
        }

        return this.httpClient
            // makes call to api
            .get<Template[]>(
                'https://matthewsfalberg.com/api/rest/pagetemplate',
                httpOptions
            )
            .pipe(map((results) => {
                return results
            }))
    }
}
