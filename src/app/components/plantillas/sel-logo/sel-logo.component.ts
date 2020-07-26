import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sel-logo',
  templateUrl: './sel-logo.component.html',
  styleUrls: ['./sel-logo.component.scss']
})
export class SelLogoComponent implements OnInit {
  
  logos=[
    {
      "id":1,
      "logo":"https://icardlink.me/recursos/2020/04/1280px-Service_mark.svg.png",
    },
    {
      "id":3,
      "logo":"https://icardlink.me/recursos/2020/05/Logo-xavier-arteaga-rojo-final-web-blanco.png",
    },
    {
      "id":4,
      "logo":"https://icardlink.me/recursos/2020/05/logo-ejemplo.png",
    },
  ]
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
  @Output() data: EventEmitter<any> = new EventEmitter();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  
  pass(dato){
    window.localStorage.setItem("selectLogo", JSON.stringify(dato));
  }
  
  changeLogo(dato){
    this.data=dato;
    this.dataService.changeLogo$.emit(dato);
  }
}
   

