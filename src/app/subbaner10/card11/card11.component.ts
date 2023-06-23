import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card11',
  templateUrl: './card11.component.html',
  styleUrls: ['./card11.component.css']
})
export class Card11Component {
  constructor(private routes:Router){}
  onclick(){
    this.routes.navigateByUrl('doctors')
  }
}
