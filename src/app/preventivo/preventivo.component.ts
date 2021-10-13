import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preventivo',
  templateUrl: './preventivo.component.html',
  styleUrls: ['./preventivo.component.css']
})
export class PreventivoComponent implements OnInit {

  Areas: string[]=[
    "Climas",
    "Instalaciones electricas",
    "Techos",
    "Sistemas",
    "Estacionamiento",
    "Jardin"
  ]

  Meses : string[]=[
    "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septeimbre","Octubre","Noviembre",
    "Diciembre"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
