import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { AppRoutingModule } from './app-routing.module';
import { BusinessListComponent } from './business-list/business-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BusinessesComponent,
    BusinessListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
