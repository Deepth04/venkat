import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card7',
  templateUrl: './card7.component.html',
  styleUrls: ['./card7.component.css']
})
export class Card7Component {
  constructor(private routes:Router){}
  onclick(){
    this.routes.navigateByUrl('doctors')
  }
}
