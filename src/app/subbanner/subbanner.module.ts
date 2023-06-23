import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubbannerRoutingModule } from './subbanner-routing.module';
import { Nav2Component } from './nav2/nav2.component';
import { Banner3Component } from './banner3/banner3.component';
import { Card1Component } from './card1/card1.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    Nav2Component,
    Banner3Component,
    Card1Component,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SubbannerRoutingModule
  ],
  exports:[
    Nav2Component,
    Banner3Component,
    Card1Component,
    FooterComponent
  ]
})
export class SubbannerModule { }
