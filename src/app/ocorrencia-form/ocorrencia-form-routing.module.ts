import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcorrenciaFormPage } from './ocorrencia-form.page';

const routes: Routes = [
  {
    path: '',
    component: OcorrenciaFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcorrenciaFormPageRoutingModule {}
