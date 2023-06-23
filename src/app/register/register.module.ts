import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { Navbar2Component } from './navbar2/navbar2.component';
import { Register1Component } from './register1/register1.component';


@NgModule({
  declarations: [
    Navbar2Component,
    Register1Component
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ],
  exports:[
    Navbar2Component,
    Register1Component
  ]
})
export class RegisterModule { }
