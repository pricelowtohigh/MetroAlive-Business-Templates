import { Component, OnInit } from '@angular/core';
import { Template, TemplateService } from './template.service';

import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'MetroAlive Business Sites';

  templates?: Observable<Template[]>

  constructor(
    private templateService: TemplateService
  ) { }

    ngOnInit(): void {
      this.templates = this.templateService.get() // get list of templates from the database
  }

  getTheListOfTemplates() {
    // CSF : 6/2/23
    // when the component loads, we make an api call to the database to get the list of templates
    // so we can populate our dropdown.  this call should only happen once.  the api call is done
    // via the template service.  the template service returns an Observable.
    this.templates = this.templateService.get()
  }
}
