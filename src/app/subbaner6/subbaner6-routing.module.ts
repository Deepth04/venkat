import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subbaner6Component } from './subbaner6.component';

const routes: Routes = [
  {path:'subbaner6',component:Subbaner6Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Subbaner6RoutingModule { }
