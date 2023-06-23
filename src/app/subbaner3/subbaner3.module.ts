import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subbaner3RoutingModule } from './subbaner3-routing.module';
import { Nav5Component } from './nav5/nav5.component';
import { Banner6Component } from './banner6/banner6.component';
import { Card4Component } from './card4/card4.component';
import { Footer3Component } from './footer3/footer3.component';


@NgModule({
  declarations: [
    Nav5Component,
    Banner6Component,
    Card4Component,
    Footer3Component
  ],
  imports: [
    CommonModule,
    Subbaner3RoutingModule
  ],
  exports:[
    Nav5Component,
    Banner6Component,
    Card4Component,
    Footer3Component
  ]
})
export class Subbaner3Module { }
