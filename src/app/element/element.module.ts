import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementRoutingModule } from './element-routing.module';
import { ElementHomeComponent } from './element-home/element-home.component';
import { SharedModule } from '../shared/shared.module';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { SegementComponent } from './segement/segement.component';
import { TimesDirective } from './times.directive';


@NgModule({
  declarations: [
    ElementHomeComponent,
    PlaceholderComponent,
    SegementComponent,
    TimesDirective
  ],
  imports: [
    CommonModule,
    ElementRoutingModule,
    SharedModule
  ]
})
export class ElementModule { }
