import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrocliPageRoutingModule } from './cadastrocli-routing.module';

import { CadastrocliPage } from './cadastrocli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrocliPageRoutingModule
  ],
  declarations: [CadastrocliPage]
})
export class CadastrocliPageModule {}
