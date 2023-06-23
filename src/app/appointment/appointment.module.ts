import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { Nav50Component } from './nav50/nav50.component';
import { BanComponent } from './ban/ban.component';


@NgModule({
  declarations: [
    Nav50Component,
    BanComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule
  ],
  exports:[
    Nav50Component,
    BanComponent
  ]
})
export class AppointmentModule { }
