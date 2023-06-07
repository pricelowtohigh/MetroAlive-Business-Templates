import { Injectable } from '@angular/core';
import { Business } from '../lib/business';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
      params: {
        templateId,
        limit: 20,
      },
    }

    return this.httpClient
      // makes call to api
      .get<Business[]>(
        'https://matthewsfalberg.com/api/rest/business',
        httpOptions
      )
      .pipe(map((results) => {
        return results
      }))
  }
}
