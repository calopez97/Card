import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sel-logo',
  templateUrl: './sel-logo.component.html',
  styleUrls: ['./sel-logo.component.scss']
})
export class SelLogoComponent implements OnInit {
  
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

  constructor() { }

  ngOnInit(): void {
  }
  
  
}
   

