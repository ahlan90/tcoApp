import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TcoFormPageRoutingModule } from './tco-form-routing.module';

import { TcoFormPage } from './tco-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TcoFormPageRoutingModule
  ],
  declarations: [TcoFormPage]
})
export class TcoFormPageModule {}
