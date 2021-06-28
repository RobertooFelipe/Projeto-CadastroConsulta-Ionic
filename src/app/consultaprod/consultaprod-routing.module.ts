import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaprodPage } from './consultaprod.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaprodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaprodPageRoutingModule {}
