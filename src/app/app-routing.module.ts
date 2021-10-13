import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { PendientesComponent } from './pendientes/pendientes.component';


const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
  ,
  {
    path: 'almacen',
    component: AlmacenComponent
  },
  {
    path: 'pendientes',
    component: PendientesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
