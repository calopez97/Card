import { Injectable, EventEmitter } from '@angular/core';



@Injectable({
  providedIn: 'root'
})



export class DataService {
 

  nombre$ = new EventEmitter<any[]>(); 
  changeLogo$ = new EventEmitter<any[]>();
  profileData$= new EventEmitter<any[]>();
  letterSize$= new EventEmitter<number>();
  changeColor$=new EventEmitter<string>();
  changeColorProf$=new EventEmitter<string>();
  icon$= new EventEmitter<any[]>();
  changeSizeIcon$ = new EventEmitter<number>();
  roudingCorners$ = new EventEmitter<number>();
  changeColorIcon$=new EventEmitter<string>();
  
  constructor() { }

}




