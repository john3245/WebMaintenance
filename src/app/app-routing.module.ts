import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { PreventivoComponent } from './preventivo/preventivo.component';
import { ReportesComponent } from './reportes/reportes.component';
=======
import { HomeComponent } from './home/home.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { PendientesComponent } from './pendientes/pendientes.component';

>>>>>>> 4dfbddf2583797a0b3051e01f84c1e4e2fc6cbf9

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
<<<<<<< HEAD
    path:  'preventivo',
    component: PreventivoComponent
  },
  {
    path: 'reportes',
    component: ReportesComponent
  }

=======
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
>>>>>>> 4dfbddf2583797a0b3051e01f84c1e4e2fc6cbf9

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
