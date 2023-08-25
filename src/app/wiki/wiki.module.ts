import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{HttpClient, HttpClientModule} from '@angular/common/http';

import { WikiRoutingModule } from './wiki-routing.module';
import { WikiHomeComponent } from './wiki-home/wiki-home.component';
import { SharedModule } from '../shared/shared.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageListComponent } from './page-list/page-list.component';


@NgModule({
  declarations: [
    WikiHomeComponent,
    SearchBarComponent,
    PageListComponent,
   
  ],
  imports: [
    CommonModule,
    WikiRoutingModule,
    SharedModule,
    HttpClientModule,
  ]
})
export class WikiModule { }
