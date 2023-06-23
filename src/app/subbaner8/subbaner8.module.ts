import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subbaner8RoutingModule } from './subbaner8-routing.module';
import { Nav10Component } from './nav10/nav10.component';
import { Banner11Component } from './banner11/banner11.component';
import { Footer8Component } from './footer8/footer8.component';
import { Card9Component } from './card9/card9.component';


@NgModule({
  declarations: [
    Nav10Component,
    Banner11Component,
    Footer8Component,
    Card9Component
  ],
  imports: [
    CommonModule,
    Subbaner8RoutingModule
  ],
  exports:[
    Nav10Component,
    Banner11Component,
    Footer8Component,
    Card9Component
  ]
  
})
export class Subbaner8Module { }
