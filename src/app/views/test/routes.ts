import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'test1',
    loadComponent: () => import('./test1/test1.component').then(m => m.Test1Component),
    data: {
      title: 'test1 Page'
    }
  },
  {
    path: 'test2',
    loadComponent: () => import('./test2/test2.component').then(m => m.Test2Component),
    data: {
      title: 'test2 Page'
    }
  },
];
