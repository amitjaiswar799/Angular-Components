import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoHomeComponent } from './photo-home/photo-home.component';

const routes: Routes = [
  {path : '', component:PhotoHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoRoutingModule { }
