import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcorrenciaFormPageRoutingModule } from './ocorrencia-form-routing.module';

import { OcorrenciaFormPage } from './ocorrencia-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OcorrenciaFormPageRoutingModule
  ],
  declarations: [OcorrenciaFormPage]
})
export class OcorrenciaFormPageModule {}
