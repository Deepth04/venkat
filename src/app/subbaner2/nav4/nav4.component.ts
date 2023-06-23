import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav4',
  templateUrl: './nav4.component.html',
  styleUrls: ['./nav4.component.css']
})
export class Nav4Component {
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
