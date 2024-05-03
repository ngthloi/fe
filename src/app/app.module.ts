import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Document1Component} from './views/document/document1/document1.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { Document2Component } from './views/document/document2/document2.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    Document1Component,
    Document2Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    NgModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }