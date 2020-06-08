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
        "imagelink": "https://www.icardlink.com/recursos/galileo.png"
      },
      {
        "id": 2,
        "Name": "Marilyn Monroe",
        "imagelink": "https://www.icardlink.com/recursos/Anastasia-marin.png"
      },
      {
        "id": 3,
        "Name": "Pasteur",
        "imagelink": "https://www.icardlink.com/recursos/pasteur.png"
      },
      {
        "id": 4,
        "Name": "Oscuro Digital",
        "imagelink": "https://www.icardlink.com/recursos/faker.png"
      },
      {
        "id": 5,
        "Name": "Color Afable",
        "imagelink": "https://www.icardlink.com/recursos/stevens-morphy.png"
      },
      {
        "id": 6,
        "Name": "Azul suave Corporativo",
        "imagelink": "https://www.icardlink.com/recursos/ramiro-fraga.png"
      },
      {
        "id": 7,
        "Name": "Salpicadura Colorida",
        "imagelink": "https://www.icardlink.com/recursos/gualberto-ibarreto.png"
      },
      {
        "id": 8,
        "Name": "Corporativo & Formal",
        "imagelink": "https://www.icardlink.com/recursos/alejandro-magno.png"
      },
      {
        "id": 9,
        "Name": "Sobrio Elegante",
        "imagelink": "https://www.icardlink.com/recursos/jose.png"
      },
      {
        "id": 10,
        "Name": "Gris y Amarillo",
        "imagelink": "https://www.icardlink.com/recursos/darwin.png"
      },
      {
        "id": 11,
        "Name": "Colorido Audaz",
        "imagelink": "https://www.icardlink.com/recursos/DEBRA.png"
      },
      {
        "id": 12,
        "Name": "Rojo Juvenil",
        "imagelink": "https://www.icardlink.com/recursos/yoav-1.png"
      },
      {
        "id": 13,
        "Name": "Azul Sombrio",
        "imagelink": "https://www.icardlink.com/recursos/IRIEL-BADILLO-SELLER.png"
      },
      {
        "id": 14,
        "Name": "Oscuro Impresionante",
        "imagelink": "https://www.icardlink.com/recursos/KLAUS.png"
      },
      {
      "id":15,
      "Name": "Gutenberg",
      "imagelink": "https://www.icardlink.com/recursos/gutenberg.png"
    }  
    ];

  }

  pass(dato){
    this.data = dato;
    window.localStorage.setItem("dataSelect", JSON.stringify(dato));
    // this.activateEvents = dato;
    // this.activateEvents.emit(dato);
  }
}
