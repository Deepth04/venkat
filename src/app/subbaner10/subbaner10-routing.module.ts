import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subbaner10Component } from './subbaner10.component';

const routes: Routes = [
  {path:'subbaner10',component:Subbaner10Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Subbaner10RoutingModule { }
