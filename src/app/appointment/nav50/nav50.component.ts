import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav50',
  templateUrl: './nav50.component.html',
  styleUrls: ['./nav50.component.css']
})
export class Nav50Component {
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
  onclick2()
  {
    this.routes.navigateByUrl('login')
  }
}
