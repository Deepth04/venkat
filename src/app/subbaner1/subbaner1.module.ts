import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subbaner1RoutingModule } from './subbaner1-routing.module';
import { Nav3Component } from './nav3/nav3.component';
import { Banner4Component } from './banner4/banner4.component';
import { Card2Component } from './card2/card2.component';
import { Footer1Component } from './footer1/footer1.component';


@NgModule({
  declarations: [
    Nav3Component,
    Banner4Component,
    Card2Component,
    Footer1Component
  ],
  imports: [
    CommonModule,
    Subbaner1RoutingModule
  ],
  exports:[
    Nav3Component,
    Banner4Component,
    Card2Component,
    Footer1Component
  ]
})
export class Subbaner1Module { }
