import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewHomeComponent } from './view-home/view-home.component';
import { SharedModule } from '../shared/shared.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
  declarations: [
    ViewHomeComponent,
    StatisticsComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    SharedModule
  ]
})
export class ViewModule { }
