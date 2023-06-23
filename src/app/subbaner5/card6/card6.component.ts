import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card6',
  templateUrl: './card6.component.html',
  styleUrls: ['./card6.component.css']
})
export class Card6Component {
  constructor(private routes:Router){}
  onclick(){
    this.routes.navigateByUrl('doctors')
  }
}
