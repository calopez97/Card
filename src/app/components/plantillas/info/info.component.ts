import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  

color='#000000'
colorProf="#FFFFFF" 
  
  value:Number=28; 


form: FormGroup; 
colores = [
  {
    "id":1,
    "color":'#440ee6'
  },
  {
    "id":2,
    "color": '#32a852'
  },
  {
    "id":3,
    "color":'#326da8'
  },
  {
    "id":4,
    "color":'#3e32a8'
  },
  {
    "id":5,
    "color":'#a83294'
  },
  {
    "id":6,
    "color":'#e0da2d'
  },
]


  constructor( private dataService:DataService ) { 
    
  }

  ngOnInit(): void {
    this.BuildForm();
    
  }

  private BuildForm(){
    this.form= new FormGroup({
      name: new FormControl('',[Validators.required]),
      titleprofession: new FormControl('',[Validators.required])
    });
    
    // this.form.valueChanges.subscribe(value=>{
    //  console.log(value);
    // })
  }

  save(event:Event){
    
    event.preventDefault();
    if(this.form.valid){
    const formValue=this.form.value;
    this.dataService.profileData$.emit(formValue);
    this.form.reset();
  }else{
    this.form.markAllAsTouched();
  }
  }

  
  passColor(color){
    this.color=color; 
    this.dataService.changeColor$.emit(color);
  }

  passColor2(col){
    this.colorProf=col;
    this.dataService.changeColorProf$.emit(col);
  }

  pass(value){
    this.dataService.letterSize$.emit(value);
    document.getElementById('temp').innerHTML= value +  ( 'px');
  }

  getColor(value){
    this.dataService.changeColor$.emit(value);
  }

  getColorProf(value){
    this.dataService.changeColorProf$.emit(value);
  }


}

  

