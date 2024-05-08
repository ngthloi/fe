import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LauncherComponent} from '../app/views/pages/launcher/launcher.component'
import{LoginComponent} from '../app/views/pages/login/login.component'
import { AuthGuard } from '../app/guards/auth.guard'
const routes: Routes = [
    { path: 'launcher', component: LauncherComponent },
    { path: 'login', component: LoginComponent },
    { 
      path: 'document',
      loadChildren: () => import('../app/views/document/document.module').then(m => m.DocumentRoutingModule),
      canActivate: [AuthGuard]
    },
    
    { 
      path: 'test',
      loadChildren: () => import('../app/views/test/test.module').then(m => m.TestRoutingModule),
      canActivate: [AuthGuard]
    },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }