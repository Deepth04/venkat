import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subbaner9Component } from './subbaner9.component';

const routes: Routes = [
  {path:'subbaner9',component:Subbaner9Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Subbaner9RoutingModule { }
