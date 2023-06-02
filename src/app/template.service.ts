import { BehaviorSubject, Observable, map } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'

export interface Template {
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

  readonly currentResults$ = new BehaviorSubject<Template[]>([])

  public get(): Observable<void> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain',
      }),
    }

    return this.httpClient
      .post<Template[]>(
        environment.metroaliveURL,
        {
          method: 'simpleget',
          command: 'Template_GetTemplateList',
          parameters: { },
        },
        httpOptions
      )
      .pipe(map((results) => this.currentResults$.next(results)))
  }
}
