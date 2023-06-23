import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subbaner11Component } from './subbaner11.component';

const routes: Routes = [
  {path:'subbaner11',component:Subbaner11Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Subbaner11RoutingModule { }
