import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactusComponent} from './contactus/contactus.component';
import {OurnewsComponent} from './ournews/ournews.component';
import {GamesComponent} from './games/games.component';
const routes: Routes = [

{
	path:'Home',component:HomeComponent
},

{
	path:'About',component:AboutComponent
},
{
	path:'Games',component:GamesComponent
},
{
path:'Ournews',component:OurnewsComponent
},
{
path:'Contactus',component:ContactusComponent
}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
