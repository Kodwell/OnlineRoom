import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardsGuard } from './guards/guards.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./paginas/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./paginas/menu/menu.module').then( m => m.MenuPageModule),
    canActivate: [GuardsGuard]
  },
  {
    path: 'e404',
    loadChildren: () => import('./paginas/e404/e404.module').then( m => m.E404PageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./paginas/menu/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [GuardsGuard]
  },
  {
    path: 'chats',
    loadChildren: () => import('./paginas/menu/chats/chats.module').then( m => m.ChatsPageModule),
    canActivate: [GuardsGuard]
  },
  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
