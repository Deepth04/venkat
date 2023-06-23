import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subbaner11RoutingModule } from './subbaner11-routing.module';
import { Card12Component } from './card12/card12.component';
import { Footer11Component } from './footer11/footer11.component';
import { Banner14Component } from './banner14/banner14.component';
import { Nav13Component } from './nav13/nav13.component';


@NgModule({
  declarations: [
    Card12Component,
    Footer11Component,
    Banner14Component,
    Nav13Component
  ],
  imports: [
    CommonModule,
    Subbaner11RoutingModule
  ],
  exports:[
    Card12Component,
    Footer11Component,
    Banner14Component,
    Nav13Component
  ]
})
export class Subbaner11Module { }
