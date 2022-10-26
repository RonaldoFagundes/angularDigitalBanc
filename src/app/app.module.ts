import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './components/views/home/home.component';
import { UserReadComponent } from './components/views/users/user-read/user-read.component';
import { UserLoginComponent } from './components/views/users/user-login/user-login.component';
import { UserCreateComponent } from './components/views/users/user-create/user-create.component';
import { ContaReadComponent } from './components/views/contas/conta-read/conta-read.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FormsModule ,  ReactiveFormsModule} from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MovimentacaoReadComponent } from './components/views/movimentacao/movimentacao-read/movimentacao-read.component';
import { InvestimentosReadComponent } from './components/views/investimentos/investimentos-read/investimentos-read.component';
import { ContaCreateComponent } from './components/views/contas/conta-create/conta-create.component';
import { MovimentacaoCreateComponent } from './components/views/movimentacao/movimentacao-create/movimentacao-create.component';
import { ContaUpdateComponent } from './components/views/contas/conta-update/conta-update.component';
import { ContaSelectedComponent } from './components/views/contas/conta-selected/conta-selected.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,    
    FooterComponent, 
    HomeComponent, UserReadComponent, UserLoginComponent, UserCreateComponent, ContaReadComponent, MovimentacaoReadComponent, InvestimentosReadComponent, ContaCreateComponent, MovimentacaoCreateComponent, ContaUpdateComponent, ContaSelectedComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
