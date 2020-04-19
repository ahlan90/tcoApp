import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcorrenciaListPageRoutingModule } from './ocorrencia-list-routing.module';

import { OcorrenciaListPage } from './ocorrencia-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OcorrenciaListPageRoutingModule
  ],
  declarations: [OcorrenciaListPage]
})
export class OcorrenciaListPageModule {}
