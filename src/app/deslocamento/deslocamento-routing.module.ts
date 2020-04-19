import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeslocamentoPage } from './deslocamento.page';

const routes: Routes = [
  {
    path: '',
    component: DeslocamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeslocamentoPageRoutingModule {}
