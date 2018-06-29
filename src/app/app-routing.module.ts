import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscoverComponent } from './components/discover/discover.component';
import { SoonComponent } from './components/soon/soon.component';
import { SearchComponent } from './components/search/search.component';
import { LikesComponent } from './components/likes/likes.component';

const routes: Routes = [
  {
    path:'',
    component:DiscoverComponent,
  },
  {
    path:'search',
    component:SearchComponent,
  },
  {
    path:'likes',
    component:LikesComponent,
  },
  {
    path:'404',
    component:SoonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
