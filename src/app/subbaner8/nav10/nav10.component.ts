import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav10',
  templateUrl: './nav10.component.html',
  styleUrls: ['./nav10.component.css']
})
export class Nav10Component {
  public image="../assets/Data/img-removebg-preview.png"
  constructor(private routes:Router){}
  onclick(){
    this.routes.navigateByUrl('doctors')
  }
  onclick1(){
    this.routes.navigateByUrl('aboutus')
  }
  onclick2(){
    this.routes.navigateByUrl('contacttus')
  }
}
