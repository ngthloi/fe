import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Document1Component} from './views/document/document1/document1.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { Document2Component } from './views/document/document2/document2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './views/pages/login/login.component';

import { AppRoutingModule } from '../../src/app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,FormGroup } from '@angular/forms';
import { MaterialModule } from '../app/material/material.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    Document1Component,
    Document2Component,
    LoginComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,MaterialModule,
    CommonModule,
    NgModule,
    ReactiveFormsModule,
    AppRoutingModule, 
    MatCardModule,FormsModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }