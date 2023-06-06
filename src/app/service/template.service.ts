import  { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Template } from '../lib/template';
import { SimpleGetResult } from '../lib/simpleGetResult';

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
      .post<SimpleGetResult>(
        environment.metroaliveURL,
        {
          method: 'simpleget',
          command: 'Template_GetTemplateList',
          parameters: { },
        },
        httpOptions
      )
      .pipe(map((results) => {
        return results.data
      }))
  }
}
