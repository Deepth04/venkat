import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar4',
  templateUrl: './navbar4.component.html',
  styleUrls: ['./navbar4.component.css']
})
export class Navbar4Component {
  public image="../assets/Data/img-removebg-preview.png"
  constructor(private routes:Router){}
  onclick(){
    this.routes.navigateByUrl('aboutus')
  }
  onclick1(){
    this.routes.navigateByUrl('contactus')
  }
  onclick2(){
    this.routes.navigateByUrl('login')
  }
}
