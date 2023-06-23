import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointfeedback',
  templateUrl: './appointfeedback.component.html',
  styleUrls: ['./appointfeedback.component.css']
})
export class AppointfeedbackComponent {
constructor(private routes:Router){}
onclick(){
  this.routes.navigateByUrl('maindisease')
}
}
