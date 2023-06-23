import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaindiseaseComponent } from './maindisease.component';

const routes: Routes = [
  {path:'maindisease',component:MaindiseaseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaindiseaseRoutingModule { }
