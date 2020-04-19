import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TcoFormPage } from './tco-form.page';

const routes: Routes = [
  {
    path: '',
    component: TcoFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TcoFormPageRoutingModule {}
