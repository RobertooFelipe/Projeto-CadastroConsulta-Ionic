import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'consulta',
    loadChildren: () => import('./consulta/consulta.module').then( m => m.ConsultaPageModule)
  },
  {
    path: 'creditos',
    loadChildren: () => import('./creditos/creditos.module').then( m => m.CreditosPageModule)
  },
  {
    path: 'cadastrocli',
    loadChildren: () => import('./cadastrocli/cadastrocli.module').then( m => m.CadastrocliPageModule)
  },
  {
    path: 'cadastroprod',
    loadChildren: () => import('./cadastroprod/cadastroprod.module').then( m => m.CadastroprodPageModule)
  },
  {
    path: 'consultaprod',
    loadChildren: () => import('./consultaprod/consultaprod.module').then( m => m.ConsultaprodPageModule)
  },
  {
    path: 'consultacli',
    loadChildren: () => import('./consultacli/consultacli.module').then( m => m.ConsultacliPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
