import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subbaner4RoutingModule } from './subbaner4-routing.module';
import { Footer4Component } from './footer4/footer4.component';
import { Nav6Component } from './nav6/nav6.component';
import { Banner7Component } from './banner7/banner7.component';
import { Card5Component } from './card5/card5.component';


@NgModule({
  declarations: [
    Footer4Component,
    Nav6Component,
    Banner7Component,
    Card5Component
  ],
  imports: [
    CommonModule,
    Subbaner4RoutingModule
  ],
  exports:[
    Footer4Component,
    Nav6Component,
    Banner7Component,
    Card5Component
  ]
})
export class Subbaner4Module { }
