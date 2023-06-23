import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav12',
  templateUrl: './nav12.component.html',
  styleUrls: ['./nav12.component.css']
})
export class Nav12Component {
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
