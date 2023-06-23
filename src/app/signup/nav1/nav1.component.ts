import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav1',
  templateUrl: './nav1.component.html',
  styleUrls: ['./nav1.component.css']
})
export class Nav1Component {
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
