import { Component } from '@angular/core';
import { TemplateService } from '../service/template.service';

import { Observable } from 'rxjs';
import { Template } from '../lib/template';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

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
