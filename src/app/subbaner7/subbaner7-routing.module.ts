import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subbaner7Component } from './subbaner7.component';

const routes: Routes = [
  {path:'subbaner7',component:Subbaner7Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Subbaner7RoutingModule { }
