import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BannerComponent } from './banner/banner.component';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SignupModule } from './signup/signup.module';
import { SubbannerComponent } from './subbanner/subbanner.component';
import { SubbannerModule } from './subbanner/subbanner.module';
import { Subbaner1Component } from './subbaner1/subbaner1.component';
import { Subbaner2Component } from './subbaner2/subbaner2.component';
import { Subbaner3Component } from './subbaner3/subbaner3.component';
import { Subbaner4Component } from './subbaner4/subbaner4.component';
import { Subbaner5Component } from './subbaner5/subbaner5.component';
import { Subbaner6Component } from './subbaner6/subbaner6.component';
import { Subbaner7Component } from './subbaner7/subbaner7.component';
import { Subbaner8Component } from './subbaner8/subbaner8.component';
import { Subbaner9Component } from './subbaner9/subbaner9.component';
import { Subbaner10Component } from './subbaner10/subbaner10.component';
import { Subbaner11Component } from './subbaner11/subbaner11.component';
import { Subbaner1Module } from './subbaner1/subbaner1.module';
import { Subbaner2Module } from './subbaner2/subbaner2.module';
import { Subbaner3Module } from './subbaner3/subbaner3.module';
import { Subbaner4Module } from './subbaner4/subbaner4.module';
import { Subbaner5Module } from './subbaner5/subbaner5.module';
import { Subbaner6Module } from './subbaner6/subbaner6.module';
import { Subbaner7Module } from './subbaner7/subbaner7.module';
import { Subbaner8Module } from './subbaner8/subbaner8.module';
import { Subbaner9Module } from './subbaner9/subbaner9.module';
import { Subbaner10Module } from './subbaner10/subbaner10.module';
import { Subbaner11Module } from './subbaner11/subbaner11.module';
import { MaindiseaseComponent } from './maindisease/maindisease.component';
import { MaindiseaseModule } from './maindisease/maindisease.module';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { RegisterModule } from './register/register.module';
import { ContactusComponent } from './contactus/contactus.component';
import { ContactusModule } from './contactus/contactus.module';
import { SubmitComponent } from './submit/submit.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorsModule } from './doctors/doctors.module';
import { SpotingdonorComponent } from './search/spotingdonor.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentModule } from './appointment/appointment.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutusModule } from './aboutus/aboutus.module';
import { AppointfeedbackComponent } from './appointfeedback/appointfeedback.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    BannerComponent,
    LoginComponent,
    SignupComponent,
    SubbannerComponent,
    Subbaner1Component,
    Subbaner2Component,
    Subbaner3Component,
    Subbaner4Component,
    Subbaner5Component,
    Subbaner6Component,
    Subbaner7Component,
    Subbaner8Component,
    Subbaner9Component,
    Subbaner10Component,
    Subbaner11Component,
    MaindiseaseComponent,
    RegisterComponent,
    ContactusComponent,
    SubmitComponent,
    DoctorsComponent,
    SpotingdonorComponent,
    AppointmentComponent,
    AboutusComponent,
    AppointfeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SignupModule,
    SubbannerModule,
    Subbaner1Module,
    Subbaner2Module,
    Subbaner3Module,
    Subbaner4Module,
    Subbaner5Module,
    Subbaner6Module,
    Subbaner7Module,
    Subbaner8Module,
    Subbaner9Module,
    Subbaner10Module,
    Subbaner11Module,
    MaindiseaseModule,
    HttpClientModule,
    RegisterModule,
    ContactusModule,
    DoctorsModule,
    AppointmentModule,
    AboutusModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
