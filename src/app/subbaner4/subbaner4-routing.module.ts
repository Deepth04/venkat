import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subbaner4Component } from './subbaner4.component';

const routes: Routes = [
  {path:'subbaner4',component:Subbaner4Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Subbaner4RoutingModule { }
