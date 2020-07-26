import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Image } from '../../../models/imagen'
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-lista-plantillas',
  templateUrl: './lista-plantillas.component.html',
  styleUrls: ['./lista-plantillas.component.scss']
})

export class ListaPlantillasComponent implements OnInit {
  // @Output() passLink: EventEmitter<any> = new EventEmitter(); 
  @Output() data: EventEmitter<any> = new EventEmitter();
 

  fondo="#440ee6"; 
  imagen =  [
    {
      "id": 1,
      "color":"#333333",
    },
    {
      "id": 2,
      "color":"#683BF0",      
    },
    {
      "id": 3,
      "color":"#FFCE33",
    },
    {
      "id": 4,
      "color":"#142E7E",
    }
  ];

 

  constructor(private dataService:DataService) { };

  ngOnInit() {
  }

  changeTemplate(dato){
    this.data=dato;
    this.dataService.nombre$.emit(dato); 
  }


}
