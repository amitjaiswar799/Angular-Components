import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoHomeComponent } from './photo-home/photo-home.component';
import { PhoComponent } from './pho/pho.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PhotoHomeComponent,
    PhoComponent
  ],
  imports: [
    CommonModule,
    PhotoRoutingModule,
    SharedModule
  ]
})
export class PhotoModule { }
