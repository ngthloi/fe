import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';
import { AuthGuard } from '../app/guards/auth.guard'
export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'pages',
        loadChildren: () => import('./views/pages/routes').then((m) => m.routes)
      },
      {
        path: 'document',
        loadChildren: () => import('./views/document/routes').then((m) => m.routes),
        canActivate:[AuthGuard]
      },
      {
        path: 'test',
        loadChildren: () => import('./views/test/routes').then((m) => m.routes),
        canActivate:[AuthGuard]
      },
      
    ]
  },


  { path: '**', redirectTo: 'dashboard' }
];
