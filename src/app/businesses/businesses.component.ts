import { Component } from '@angular/core';
import { Business } from '../business';
import { BUSINESSES } from '../businesses';
import { Template } from '../template';
import { TEMPLATES } from '../templates';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent {  

  /*templateList = this.businesses.map((business) => {
    if (!TEMPLATES.includes(business.templateId) {
      TEMPLATES.push(business.templateId)
    })
  })*/

}
