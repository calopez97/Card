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
     'title': '¡Select Template!'
   },
   {
    "id": 2,
    'router': 'select-logo',
    'title': '¡Select LOGO!'
  },
  {
    "id": 3,
    'router': 'info',
    'title': '¡Information!'
  },
  {
    "id": 4,
    'router': 'select-redes',
    'title': '¡Select your social networks!'
  },
  {
    "id": 5,
    'router': 'link-network',
    'title': '¡Link your social networks!'
  }, 
  {
    "id": 6,
    'router': 'pago',
    'title': '¡Payment methods!'
  }
 ]

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(title) {
    this.changeTitleText.emit(title);
  }

}

