import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subbaner9RoutingModule } from './subbaner9-routing.module';
import { Card10Component } from './card10/card10.component';
import { Footer9Component } from './footer9/footer9.component';
import { Banner12Component } from './banner12/banner12.component';
import { Nav11Component } from './nav11/nav11.component';


@NgModule({
  declarations: [
    Card10Component,
    Footer9Component,
    Banner12Component,
    Nav11Component
  ],
  imports: [
    CommonModule,
    Subbaner9RoutingModule
  ],
  exports:[
    Card10Component,
    Footer9Component,
    Banner12Component,
    Nav11Component
  ]
})
export class Subbaner9Module { }
