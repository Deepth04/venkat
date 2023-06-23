import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { Navbar5Component } from './navbar5/navbar5.component';
import { Banner25Component } from './banner25/banner25.component';


@NgModule({
  declarations: [
    Navbar5Component,
    Banner25Component
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule
  ],
  exports:[
    Navbar5Component,
    Banner25Component
  ]
})
export class DoctorsModule { }
