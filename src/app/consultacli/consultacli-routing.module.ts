import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultacliPage } from './consultacli.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultacliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultacliPageRoutingModule {}
