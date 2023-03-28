import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { CompanyDetailsComponent } from '../components/company-details/company-details.component';
import { CompanyListingComponent } from '../components/company-listing/company-listing.component';


@NgModule({
  declarations: [CompanyDetailsComponent, CompanyListingComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
  ]
})
export class HomepageModule { }
