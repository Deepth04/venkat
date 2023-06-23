import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subbaner5RoutingModule } from './subbaner5-routing.module';
import { Nav7Component } from './nav7/nav7.component';
import { Banner8Component } from './banner8/banner8.component';
import { Card6Component } from './card6/card6.component';
import { Footer5Component } from './footer5/footer5.component';


@NgModule({
  declarations: [
    Nav7Component,
    Banner8Component,
    Card6Component,
    Footer5Component
  ],
  imports: [
    CommonModule,
    Subbaner5RoutingModule
  ],
  exports:[
    Nav7Component,
    Banner8Component,
    Card6Component,
    Footer5Component
  ]
})
export class Subbaner5Module { }
