import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaprodPageRoutingModule } from './consultaprod-routing.module';

import { ConsultaprodPage } from './consultaprod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaprodPageRoutingModule
  ],
  declarations: [ConsultaprodPage]
})
export class ConsultaprodPageModule {}
