import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'primera',
    loadChildren: () => import('./primera/primera.module').then( m => m.PrimeraPageModule)
  },
  {
    path: 'segunda',
    loadChildren: () => import('./segunda/segunda.module').then( m => m.SegundaPageModule)
  },
  {
    path: 'tercera',
    loadChildren: () => import('./tercera/tercera.module').then( m => m.TerceraPageModule)
  },
  {
    path: 'cuarta',
    loadChildren: () => import('./cuarta/cuarta.module').then( m => m.CuartaPageModule)
  },
  {
    path: 'quinta',
    loadChildren: () => import('./quinta/quinta.module').then( m => m.QuintaPageModule)
  },
  {
    path: 'sexta',
    loadChildren: () => import('./sexta/sexta.module').then( m => m.SextaPageModule)
  },
  {
    path: 'septima',
    loadChildren: () => import('./septima/septima.module').then( m => m.SeptimaPageModule)
  },
  {
    path: 'octava',
    loadChildren: () => import('./octava/octava.module').then( m => m.OctavaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
