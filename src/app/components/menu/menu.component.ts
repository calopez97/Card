import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() changeTitleText = new EventEmitter<string>();

  
buttons = [
   {
     "id": 1,
     'router': 'select-card',
     'title': '¡Selecciona una Plantilla!'
   },
   {
    "id": 2,
    'router': 'select-logo',
    'title': '¡Selecciona un LOGO!'
  },
  {
    "id": 3,
    'router': 'info',
    'title': '¡Tu Información!'
  },
  {
    "id": 4,
    'router': 'select-redes',
    'title': '¡Escoje tus redes sociales!'
  },
  {
    "id": 5,
    'router': 'link-network',
    'title': '¡Vincula tus redes sociales!'
  }, 
  {
    "id": 6,
    'router': 'pago',
    'title': '¡PAGO!'
  }
 ]

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(title) {
    this.changeTitleText.emit(title);
  }

}

