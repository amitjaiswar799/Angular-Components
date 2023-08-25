import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnerComponent } from './partner/partner.component';

const routes: Routes = [
  {
    path:'' , component: CollectionHomeComponent,
    children:[
     {path:'' , component: BiographyComponent},
     {path:'companie', component: CompaniesComponent},
     {path:'partner', component: PartnerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule { }
