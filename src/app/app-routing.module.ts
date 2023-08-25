import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  {path:'collection',
    loadChildren: ()=> import('./collection/collection.module').then(a=>a.CollectionModule)
  },

  {path:'element',
    loadChildren: ()=> import('./element/element.module').then(b=>b.ElementModule)
  },

  {path:'view',
    loadChildren: ()=> import('./view/view.module').then(c=>c.ViewModule)
  }, 
    
  {path:'mods',
    loadChildren: ()=> import('./mods/mods.module').then(d=>d.ModsModule)
  },
 
  {path:'wiki',
  loadChildren: ()=> import('./wiki/wiki.module').then(e=>e.WikiModule)
  },

  {path:'photo',
  loadChildren: ()=> import('./photo/photo.module').then(f=>f.PhotoModule)
  },

  {path:'', component: HomeComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
