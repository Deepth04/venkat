import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner25',
  templateUrl: './banner25.component.html',
  styleUrls: ['./banner25.component.css']
})
export class Banner25Component {
// public images="../assets/Data/doctors.png"
constructor(private routes:Router){}
onclick(){
  this.routes.navigateByUrl('appointment')
}
}
