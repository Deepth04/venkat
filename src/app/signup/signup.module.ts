import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { Nav1Component } from './nav1/nav1.component';
import { Banner2Component } from './banner2/banner2.component';


@NgModule({
  declarations: [
    Nav1Component,
    Banner2Component
  ],
  imports: [
    CommonModule,
    SignupRoutingModule
  ],
  exports:[
    Nav1Component,
    Banner2Component
  ]
})
export class SignupModule { }
