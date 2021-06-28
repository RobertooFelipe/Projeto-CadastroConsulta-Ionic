import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultacliPageRoutingModule } from './consultacli-routing.module';

import { ConsultacliPage } from './consultacli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultacliPageRoutingModule
  ],
  declarations: [ConsultacliPage]
})
export class ConsultacliPageModule {}
