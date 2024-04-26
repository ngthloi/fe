import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'launcher',
    loadComponent: () => import('./launcher/launcher.component').then(m => m.LauncherComponent),
    data: {
      title: 'Launcher Page'
    }
  }
];
