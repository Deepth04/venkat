import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Eye } from '../models/eye';

@Injectable({
  providedIn: 'root'
})
export class EyeservicesService {

  BaseUrl='../assets/Data1/food.json'
  constructor(private http:HttpClient) { }
  ngOnInit():void{}
  geteye():Observable<Eye[]>{
    return this.http.get<Eye[]>(`${this.BaseUrl}`)
  }
}
