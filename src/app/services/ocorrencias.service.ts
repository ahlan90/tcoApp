import { Injectable } from '@angular/core';
import { Ocorrencia } from '../models/ocorrencia';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciasService {

  ocorrencias: Ocorrencia[] = [
    {
      descricao: 'Ocorrencia 1'
    },
    {
      descricao: 'Ocorrencia 2'
    },
    {
      descricao: 'Ocorrencia 3'
    }
  ]
  constructor() { }

  getAll() {
    return this.ocorrencias;
  }
}
