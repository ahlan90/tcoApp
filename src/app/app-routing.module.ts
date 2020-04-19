import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'ocorrencia-list',
    loadChildren: () => import('./ocorrencia-list/ocorrencia-list.module').then( m => m.OcorrenciaListPageModule)
  },
  {
    path: 'ocorrencia-form',
    loadChildren: () => import('./ocorrencia-form/ocorrencia-form.module').then( m => m.OcorrenciaFormPageModule)
  },
  {
    path: 'tco-form',
    loadChildren: () => import('./tco-form/tco-form.module').then( m => m.TcoFormPageModule)
  },
  {
    path: 'deslocamento',
    loadChildren: () => import('./deslocamento/deslocamento.module').then( m => m.DeslocamentoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
