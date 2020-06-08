import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 public titulo:string="¡CREA TU TARJETA!"
 @Input() public  changeTitle: String = '';

  constructor() { }

  ngOnInit(): void{ 

  }

}
