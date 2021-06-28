import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrocliPage } from './cadastrocli.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrocliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrocliPageRoutingModule {}
