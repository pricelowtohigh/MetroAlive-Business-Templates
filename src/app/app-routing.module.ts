import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessesComponent } from './businesses/businesses.component';
import { BusinessListComponent } from './business-list/business-list.component';

const routes: Routes = [
  { path: 'businesses', component: BusinessesComponent },
  { path: 'businesses/:templateId', component: BusinessListComponent} // CREATE NEW COMPONENT FOR RENDERING SPECIFIC BUSINESSES
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }