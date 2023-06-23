import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusRoutingModule } from './contactus-routing.module';
import { Navbar4Component } from './navbar4/navbar4.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    Navbar4Component,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactusRoutingModule
  ],
  exports:[
    Navbar4Component,
    ContactComponent
  ]
})
export class ContactusModule { }
