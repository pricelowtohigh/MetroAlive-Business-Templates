import  { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

export interface ISearchResultData {
  // this represents what is returned from the database.  it's structure is defined by the api
  returncode: number
  returnmsg: string
  data: Template[]
}

export interface Template {
  // this represents a template record from the TLTemplate table.  it's structure is defined by the database stored procedure
  templateid: number
  templatename: string
  templatedescription: number
}

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
      .post<ISearchResultData>(
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
