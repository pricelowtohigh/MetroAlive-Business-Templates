import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessListComponent } from './business-list/business-list.component';

const routes: Routes = [               // This route will eventually be something more like a 'dashboard' 
  { path: 'businesses/:templateId', component: BusinessListComponent}   // Selecting a Template ID from the dropdown will navigate to this route, which will display the businesses that share that Template ID
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }