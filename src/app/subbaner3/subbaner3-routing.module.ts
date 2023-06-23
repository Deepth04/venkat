import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subbaner3Component } from './subbaner3.component';

const routes: Routes = [
  {path:'subbaner3',component:Subbaner3Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Subbaner3RoutingModule { }
