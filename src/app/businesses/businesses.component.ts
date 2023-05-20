import { Component } from '@angular/core';
import { Business } from '../business';
import { BUSINESSES } from '../businesses';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent {
  businesses = BUSINESSES;
}
