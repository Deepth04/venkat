import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutnavComponent } from './aboutnav/aboutnav.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';


@NgModule({
  declarations: [
    AboutnavComponent,
    AboutpageComponent

  ],
  imports: [
    CommonModule,
    AboutusRoutingModule
  ],
  exports:[
    AboutnavComponent,
    AboutpageComponent
  ]
})
export class AboutusModule { }
