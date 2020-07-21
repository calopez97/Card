import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Image } from '../../../models/imagen'

@Component({
  selector: 'app-lista-plantillas',
  templateUrl: './lista-plantillas.component.html',
  styleUrls: ['./lista-plantillas.component.scss']
})

export class ListaPlantillasComponent implements OnInit {
  // @Output() passLink: EventEmitter<any> = new EventEmitter(); 
  @Output() data: EventEmitter<any> = new EventEmitter();
 public imagen: Image[] 

  constructor() { };

  ngOnInit() {

    this.imagen =  [
      {
        "id": 1,
        "Name": "Galileo Galilei",
        "imagelink": "https://www.icardlink.com/recursos/galileo.png",
        "color":"#333333",
      },
      {
        "id": 2,
        "Name": "Marilyn Monroe",
        "imagelink": "https://www.icardlink.com/recursos/Anastasia-marin.png",
        "color":"#683BF0",      
      },
      {
        "id": 3,
        "Name": "Pasteur",
        "imagelink": "https://www.icardlink.com/recursos/pasteur.png",
        "color":"#FFCE33",
      },
      {
        "id": 4,
        "Name": "Oscuro Digital",
        "imagelink": "https://www.icardlink.com/recursos/faker.png",
        "color":"#142E7E",
      },
      {
        "id": 5,
        "Name": "Color Afable",
        "imagelink": "https://www.icardlink.com/recursos/stevens-morphy.png",
        "color":"#2F8BCE",
      },
      {
        "id": 6,
        "Name": "Azul suave Corporativo",
        "imagelink": "https://www.icardlink.com/recursos/ramiro-fraga.png",
        "color":"#0A6EE5",
      },
      {
        "id": 7,
        "Name": "Salpicadura Colorida",
        "imagelink": "https://www.icardlink.com/recursos/gualberto-ibarreto.png",
        "color":"#22A7AB",
      },
      {
        "id": 8,
        "Name": "Corporativo & Formal",
        "imagelink": "https://www.icardlink.com/recursos/alejandro-magno.png",
        "color":"#52545B",
      },
      {
        "id": 9,
        "Name": "Sobrio Elegante",
        "imagelink": "https://www.icardlink.com/recursos/jose.png",
        "color":"#BCBEC5",
      },
    ];

  }

  pass(dato){
    this.data = dato;
    window.localStorage.setItem("dataSelect", JSON.stringify(dato));
  }
}
