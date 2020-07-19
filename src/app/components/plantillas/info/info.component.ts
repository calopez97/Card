import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  value: number = 100;
  


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


  constructor( private dataService: DataService ) { 
    this.BuildForm();
  }

  ngOnInit(): void {
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
    const value=this.form.value;
    this.dataService.nombre$.emit(value)
    console.log(value); 
  }else{
    this.form.markAllAsTouched();
  }
  }

  

  
}
