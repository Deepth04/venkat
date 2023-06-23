import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner1',
  templateUrl: './banner1.component.html',
  styleUrls: ['./banner1.component.css']
})
export class Banner1Component {
  constructor(private routes:Router){

  }
  onclick(){
        this.routes.navigateByUrl('signup')
  }
  onclick1(){
    this.routes.navigateByUrl('maindisease')
  }

}
