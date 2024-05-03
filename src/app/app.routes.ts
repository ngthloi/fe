import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';

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
        loadChildren: () => import('./views/document/routes').then((m) => m.routes)
      },
      {
        path: 'test',
        loadChildren: () => import('./views/test/routes').then((m) => m.routes)
      },
      
    ]
  },


  { path: '**', redirectTo: 'dashboard' }
];
