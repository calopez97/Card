import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socialnetwork',
  templateUrl: './socialnetwork.component.html',
  styleUrls: ['./socialnetwork.component.scss']
})
export class SocialnetworkComponent implements OnInit {
   networks = [
     {
       "id":1,
       "name":"Twitter",
       "link":"https://image.flaticon.com/icons/svg/1384/1384049.svg"
     },
     {
       "id":2,
       "name":"Google Plus",
       "link":"https://image.flaticon.com/icons/svg/49/49647.svg"
     },
     {
      "id":3,
      "name":"Facebook",
      "link":"https://image.flaticon.com/icons/svg/1384/1384021.svg"
    },
    {
      "id":4,
      "name":"Instagram",
      "link":"https://image.flaticon.com/icons/svg/1384/1384047.svg"
    },
    {
      "id":5,
      "name":"Spotify",
      "link":"https://image.flaticon.com/icons/svg/121/121148.svg"
    },
    {
      "id":6,
      "name":"LinkedIn",
      "link":"https://image.flaticon.com/icons/svg/1384/1384046.svg"
    },
    {
      "id":7,
      "name":"Behance",
      "link":"https://www.flaticon.com/premium-icon/icons/svg/2931/2931627.svg"
    },
    {
      "id":8,
      "name":"Pinterest",
      "link":"https://image.flaticon.com/icons/svg/49/49573.svg"
    },
    {
      "id":9,
      "name":"Snapchat",
      "link":"https://image.flaticon.com/icons/svg/1384/1384050.svg"
    },
    {
      "id":10,
      "name":"WhatsApp",
      "link":"https://image.flaticon.com/icons/svg/1384/1384039.svg"
    },
    {
      "id":11,
      "name":"Skype",
      "link":"https://image.flaticon.com/icons/svg/1384/1384042.svg"
    },
    {
      "id":12,
      "name":"tumblr",
      "link":"https://image.flaticon.com/icons/svg/60/60548.svg"
    },
    {
      "id":13,
      "name":"Deezer",
      "link":"https://image.flaticon.com/icons/svg/49/49661.svg"
    },
    {
      "id":14,
      "name":"DropBox",
      "link":"https://image.flaticon.com/icons/svg/121/121532.svg"
    },
    {
      "id":15,
      "name":"YouTube",
      "link":"https://image.flaticon.com/icons/svg/1384/1384044.svg"
    },
    {
      "id":16,
      "name":"SoundCloud",
      "link":"https://image.flaticon.com/icons/svg/121/121513.svg"
    }
   ];
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
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  passBkColor(color){
    window.localStorage.setItem("BkColor", JSON.stringify(color));
  }

  pass(icon){
    window.localStorage.setItem("icons", JSON.stringify(icon)); 
  }

  iconSize(value){
    window.localStorage.setItem("IconSize", value);
  }

  rouding(porcent){
    window.localStorage.setItem("roudcorner", porcent);
  }
}
