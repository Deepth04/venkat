import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ban',
  templateUrl: './ban.component.html',
  styleUrls: ['./ban.component.css']
})
export class BanComponent {
  constructor(private routes:Router){}
  onclick(){
    this.routes.navigateByUrl('appointfeedback');
  }
}
