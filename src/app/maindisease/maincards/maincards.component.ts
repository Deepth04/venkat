import { Component } from '@angular/core';
import { Eye } from 'src/app/models/eye';
import { EyeservicesService } from 'src/app/services/eyeservices.service';


@Component({
  selector: 'app-maincards',
  templateUrl: './maincards.component.html',
  styleUrls: ['./maincards.component.css']
})
export class MaincardsComponent {
  public foods!:Eye[];
  constructor(private service:EyeservicesService){}
 
  ngOnInit(){
   this.service.geteye().subscribe(data => this.foods=data);
  }
  getRoute(category: string): string {
    // Return the appropriate route based on the food category
    if (category === 'Ear') {
      return '../subbanner'; // Change this to the desired route for vegetables
    } else if (category === 'Brain') {
      return '../subbaner2'; // Change this to the desired route for fruits
    } 
    else if (category === 'Hair') {
      return '../subbaner1'; // Change this to the desired route for fruits
    } 
    else if (category === 'Tongue') {
      return '../subbaner3'; // Change this to the desired route for fruits
    } 
    else if (category === 'Mouth') {
      return '../subbaner4'; // Change this to the desired route for fruits
    } 
    else if (category === 'Nose') {
      return '../subbaner5'; // Change this to the desired route for fruits
    } 
    else if (category === 'Lungs') {
      return '../subbaner6'; // Change this to the desired route for fruits
    } 
    else if (category === 'Liver') {
      return '../subbaner7'; // Change this to the desired route for fruits
    } 
    else if (category === 'Kidney') {
      return '../subbaner8'; // Change this to the desired route for fruits
    } 
    else if (category === 'Pancreas') {
      return '../subbaner9'; // Change this to the desired route for fruits
    } 
    else if (category === 'Intestine') {
      return '../subbaner10'; // Change this to the desired route for fruits
    } 
    else if (category === 'Bones') {
      return '../subbaner11'; // Change this to the desired route for fruits
    } 
    else  {
      return ''; // Handle other categories if needed
    }
  }

}
