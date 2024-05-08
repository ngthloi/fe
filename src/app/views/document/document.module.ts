import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Document1Component } from './document1/document1.component';
import { Document2Component } from './document2/document2.component';

const routes: Routes = [
  { path: 'document1', component: Document1Component },
  { path: 'document2', component: Document2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes), DocumentRoutingModule ],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }