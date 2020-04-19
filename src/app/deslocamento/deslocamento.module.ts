import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeslocamentoPageRoutingModule } from './deslocamento-routing.module';

import { DeslocamentoPage } from './deslocamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeslocamentoPageRoutingModule
  ],
  declarations: [DeslocamentoPage]
})
export class DeslocamentoPageModule {}
