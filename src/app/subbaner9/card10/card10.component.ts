import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card10',
  templateUrl: './card10.component.html',
  styleUrls: ['./card10.component.css']
})
export class Card10Component {
  constructor(private routes:Router){}
  onclick(){
    this.routes.navigateByUrl('doctors')
  }
}
