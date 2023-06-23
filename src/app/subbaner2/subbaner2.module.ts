import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subbaner2RoutingModule } from './subbaner2-routing.module';
import { Nav4Component } from './nav4/nav4.component';
import { Banner5Component } from './banner5/banner5.component';
import { Card3Component } from './card3/card3.component';
import { Footer2Component } from './footer2/footer2.component';


@NgModule({
  declarations: [
    Nav4Component,
    Banner5Component,
    Card3Component,
    Footer2Component
  ],
  imports: [
    CommonModule,
    Subbaner2RoutingModule
  ],
  exports:[
    Nav4Component,
    Banner5Component,
    Card3Component,
    Footer2Component
  ]
})
export class Subbaner2Module { }
