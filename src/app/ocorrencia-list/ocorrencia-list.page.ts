import { Component, OnInit } from '@angular/core';
import { Ocorrencia } from '../models/ocorrencia';
import { OcorrenciasService } from '../services/ocorrencias.service';

@Component({
  selector: 'app-ocorrencia-list',
  templateUrl: './ocorrencia-list.page.html',
  styleUrls: ['./ocorrencia-list.page.scss'],
})
export class OcorrenciaListPage implements OnInit {

  ocorrencias: Ocorrencia[];

  constructor(
    private ocorrenciaService: OcorrenciasService
  ) { }

  ngOnInit() {
    this.ocorrencias = this.ocorrenciaService.getAll();
  }

}
