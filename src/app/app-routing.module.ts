import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PreventivoComponent } from './preventivo/preventivo.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:  'preventivo',
    component: PreventivoComponent
  },
  {
    path: 'reportes',
    component: ReportesComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
