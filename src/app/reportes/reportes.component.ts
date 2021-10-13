import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  Documentos: string[]=[
    "Mantenimiento anual preventivo 2020",
    "Bitacora mantenimiento 11/10/2021",
    "Mantenimiento anual preventivo 2021",
    "Mantenimiento anual preventivo 2019"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
