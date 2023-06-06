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
}
