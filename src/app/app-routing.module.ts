import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LauncherComponent} from '../app/views/pages/launcher/launcher.component'
import{LoginComponent} from '../app/views/pages/login/login.component'
import{Document1Component} from'../app/views/document/document1/document1.component'
import{Document2Component} from '../app/views/document/document2/document2.component'
import{Test1Component} from '../app/views/test/test1/test1.component'
import{Test2Component} from '../app/views/test/test2/test2.component'
import { AuthGuard } from '../app/guards/auth.guard'
const routes: Routes = [
    { path: 'launcher', component: LauncherComponent },
    { path: 'login', component: LoginComponent },
      { path: 'document/document1', component: Document1Component, canActivate:[AuthGuard]},
      { path: 'document2', component: Document2Component,canActivate:[AuthGuard]},
      { path: 'test1', component: Test1Component,canActivate:[AuthGuard] },
      { path: 'test2', component: Test2Component,canActivate:[AuthGuard] }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }