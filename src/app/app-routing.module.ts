import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SubbannerComponent } from './subbanner/subbanner.component';
import { SubmitComponent } from './submit/submit.component';
import { SpotingdonorComponent } from './search/spotingdonor.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointfeedbackComponent } from './appointfeedback/appointfeedback.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'login', component:LoginComponent},
  {path:'subbanner',component:SubbannerComponent},
  {path:'submit',component:SubmitComponent},
  {path:'search',component:SpotingdonorComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'appointfeedback',component:AppointfeedbackComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
