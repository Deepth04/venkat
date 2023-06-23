import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
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
