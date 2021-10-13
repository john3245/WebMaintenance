import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
<<<<<<< HEAD
    PreventivoComponent,
    ReportesComponent
=======
    HomeComponent,
    AlmacenComponent,
    PendientesComponent
>>>>>>> 4dfbddf2583797a0b3051e01f84c1e4e2fc6cbf9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
