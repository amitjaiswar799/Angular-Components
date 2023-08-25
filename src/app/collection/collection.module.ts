import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { TabMenuComponent } from './tab-menu/tab-menu.component';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnerComponent } from './partner/partner.component';


@NgModule({
  declarations: [
    CollectionHomeComponent,
    TableComponent,
    TabMenuComponent,
    BiographyComponent,
    CompaniesComponent,
    PartnerComponent
  ],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    SharedModule
  ]
})
export class CollectionModule { }
