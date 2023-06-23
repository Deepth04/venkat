import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner2',
  templateUrl: './banner2.component.html',
  styleUrls: ['./banner2.component.css']
})
export class Banner2Component {
  public images="../assets/Data/Group 68.png"
  constructor(private routes:Router){

  }
  onclick(){
    this.routes.navigateByUrl('login')
  }
  onclick1(){
    this.routes.navigateByUrl('register')
  }
}
