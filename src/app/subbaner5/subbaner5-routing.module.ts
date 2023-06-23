import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subbaner5Component } from './subbaner5.component';

const routes: Routes = [
  {path:'subbaner5',component:Subbaner5Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Subbaner5RoutingModule { }
