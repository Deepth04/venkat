import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subbaner7RoutingModule } from './subbaner7-routing.module';
import { Nav9Component } from './nav9/nav9.component';
import { Banner10Component } from './banner10/banner10.component';
import { Card8Component } from './card8/card8.component';
import { Footer7Component } from './footer7/footer7.component';


@NgModule({
  declarations: [
    Nav9Component,
    Banner10Component,
    Card8Component,
    Footer7Component
  ],
  imports: [
    CommonModule,
    Subbaner7RoutingModule
  ],
  exports:[
    Nav9Component,
    Banner10Component,
    Card8Component,
    Footer7Component
  ]
})
export class Subbaner7Module { }
