import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subbaner1Component } from './subbaner1.component';

const routes: Routes = [
  {path:'subbaner1',component:Subbaner1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Subbaner1RoutingModule { }
