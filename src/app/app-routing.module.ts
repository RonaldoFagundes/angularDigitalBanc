import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component';
import { UserLoginComponent } from './components/views/users/user-login/user-login.component';
import { UserReadComponent } from './components/views/users/user-read/user-read.component';

const routes: Routes = [
  
   {
    path:'',
    component:HomeComponent
   },

   {
    path:'users',
    component:UserReadComponent
   },

   {
    path:'login',
    component:UserLoginComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
