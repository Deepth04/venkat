import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { NavComponent } from './nav/nav.component';
import { Banner1Component } from './banner1/banner1.component';


@NgModule({
  declarations: [
    NavComponent,
    Banner1Component
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports:[
    NavComponent,
    Banner1Component
  ]
})
export class LoginModule { }
