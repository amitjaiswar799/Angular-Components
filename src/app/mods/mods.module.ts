import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';
import { ModalComponent } from './modal/modal.component';
import { AccordianComponent } from './accordian/accordian.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ModsHomeComponent,
    ModalComponent,
    AccordianComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModule
  ]
})
export class ModsModule { }
