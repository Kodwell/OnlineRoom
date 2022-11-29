import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';
import { GuardsGuard } from 'src/app/guards/guards.guard';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'clases',
        loadChildren: () => import('./clases/clases.module').then( m => m.ClasesPageModule),
        canActivate: [GuardsGuard]
      },
      {
        path: 'calendario',
        loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule),
        canActivate: [GuardsGuard]
      },
      {
        path: 'pagos',
        loadChildren: () => import('./pagos/pagos.module').then( m => m.PagosPageModule),
        canActivate: [GuardsGuard]
      },
      {
        path: 'notas',
        loadChildren: () => import('./notas/notas.module').then( m => m.NotasPageModule),
        canActivate: [GuardsGuard]
      },
    ]
  },   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
