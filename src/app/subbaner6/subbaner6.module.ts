import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subbaner6RoutingModule } from './subbaner6-routing.module';
import { Nav8Component } from './nav8/nav8.component';
import { Banner9Component } from './banner9/banner9.component';
import { Footer6Component } from './footer6/footer6.component';
import { Card7Component } from './card7/card7.component';


@NgModule({
  declarations: [
    Nav8Component,
    Banner9Component,
    Footer6Component,
    Card7Component
  ],
  imports: [
    CommonModule,
    Subbaner6RoutingModule
  ],
  exports:[
    Nav8Component,
    Banner9Component,
    Footer6Component,
    Card7Component
  ]
})
export class Subbaner6Module { }
