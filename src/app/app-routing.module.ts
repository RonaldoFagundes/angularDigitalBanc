import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaCreateComponent } from './components/views/contas/conta-create/conta-create.component';
import { ContaReadComponent } from './components/views/contas/conta-read/conta-read.component';

import { HomeComponent } from './components/views/home/home.component';
import { InvestimentosReadComponent } from './components/views/investimentos/investimentos-read/investimentos-read.component';
import { MovimentacaoReadComponent } from './components/views/movimentacao/movimentacao-read/movimentacao-read.component';
import { UserCreateComponent } from './components/views/users/user-create/user-create.component';
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
    //path:'login/:id',
    path:'login',
    component:UserLoginComponent
   },

   /*
   {
    path:'users/create/:id',
    component:UserCreateComponent
   },
    */


   {
    path:'create',
    component:UserCreateComponent
   },


   

   {
   path:'contaCreate',
   component:ContaCreateComponent
   },


   {
    path:'contas/:id',
    component:ContaReadComponent
    },
 

    /*
   {
    path:'movimentacao',
    component:MovimentacaoReadComponent
   },
   */

   

   {
    path:'contas/:id_conta/movimentacao',
    component:MovimentacaoReadComponent
   },


   {
    path:'investimentos',
    component:InvestimentosReadComponent
   },

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
