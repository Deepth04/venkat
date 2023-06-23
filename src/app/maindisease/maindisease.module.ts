import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaindiseaseRoutingModule } from './maindisease-routing.module';
import { Navbar1Component } from './navbar1/navbar1.component';
import { NavbannerComponent } from './navbanner/navbanner.component';
import { MaincardsComponent } from './maincards/maincards.component';
import { MainfooterComponent } from './mainfooter/mainfooter.component';


@NgModule({
  declarations: [
    Navbar1Component,
    NavbannerComponent,
    MaincardsComponent,
    MainfooterComponent
  ],
  imports: [
    CommonModule,
    MaindiseaseRoutingModule
  ],
  exports:[
    Navbar1Component,
    NavbannerComponent,
    MaincardsComponent,
    MainfooterComponent
  ]
})
export class MaindiseaseModule { }
