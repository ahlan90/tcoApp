import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ocorrencia-form',
  templateUrl: './ocorrencia-form.page.html',
  styleUrls: ['./ocorrencia-form.page.scss'],
})
export class OcorrenciaFormPage implements OnInit {

  incidentes = [
    {
      descricao: "Incidente 1"
    },
    {
      descricao: "Incidente 2"
    },
    {
      descricao: "Incidente 3"
    },
    {
      descricao: "Incidente 4"
    },
    {
      descricao: "Incidente 5"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
