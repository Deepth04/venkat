import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component {
  public image="../assets/Data/img-removebg-preview.png"
  constructor(private routes:Router){}
  onclick()
  {
    this.routes.navigateByUrl('aboutus')
  }
  onclick1()
  {
    this.routes.navigateByUrl('contactus')
  }
  
}
