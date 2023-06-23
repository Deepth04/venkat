import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subbaner10RoutingModule } from './subbaner10-routing.module';
import { Nav12Component } from './nav12/nav12.component';
import { Banner13Component } from './banner13/banner13.component';
import { Footer10Component } from './footer10/footer10.component';
import { Card11Component } from './card11/card11.component';


@NgModule({
  declarations: [
    Nav12Component,
    Banner13Component,
    Card11Component,
    Footer10Component
   
  ],
  imports: [
    CommonModule,
    Subbaner10RoutingModule
  ],
  exports:[
    Nav12Component,
    Banner13Component,
    Footer10Component,
    Card11Component
  ]
})
export class Subbaner10Module { }
