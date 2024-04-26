import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'document1',
    loadComponent: () => import('./document1/document1.component').then(m => m.Document1Component),
    data: {
      title: 'document1 Page'
    }
  },
  {
    path: 'document2',
    loadComponent: () => import('./document2/document2.component').then(m => m.Document2Component),
    data: {
      title: 'document2 Page'
    }
  }
];
