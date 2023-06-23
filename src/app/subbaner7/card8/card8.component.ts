import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card8',
  templateUrl: './card8.component.html',
  styleUrls: ['./card8.component.css']
})
export class Card8Component {
  constructor(private routes:Router){}
  onclick(){
    this.routes.navigateByUrl('doctors')
  }
}
