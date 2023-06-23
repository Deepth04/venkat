import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subbaner2Component } from './subbaner2.component';

const routes: Routes = [
  {path:'subbaner2',component:Subbaner2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Subbaner2RoutingModule { }
