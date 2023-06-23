import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card9',
  templateUrl: './card9.component.html',
  styleUrls: ['./card9.component.css']
})
export class Card9Component {
  constructor(private routes:Router){}
  onclick(){
    this.routes.navigateByUrl('doctors')
  }
}
