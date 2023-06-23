import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subbaner8Component } from './subbaner8.component';

const routes: Routes = [
  {path:'subbaner8',component:Subbaner8Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Subbaner8RoutingModule { }
