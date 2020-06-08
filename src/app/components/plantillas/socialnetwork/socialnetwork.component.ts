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
       "link":"https://image.flaticon.com/icons/svg/1384/1384017.svg"
     },
     {
       "id":2,
       "name":"Google Plus",
       "link":"https://image.flaticon.com/icons/svg/2111/2111477.svg"
     },
     {
      "id":3,
      "name":"Facebook",
      "link":"https://image.flaticon.com/icons/svg/1384/1384005.svg"
    },
    {
      "id":4,
      "name":"Instagram",
      "link":"https://image.flaticon.com/icons/svg/1384/1384015.svg"
    },
    {
      "id":5,
      "name":"Spotify",
      "link":"https://image.flaticon.com/icons/svg/1946/1946499.svg"
    },
    {
      "id":6,
      "name":"LinkedIn",
      "link":"https://image.flaticon.com/icons/svg/1384/1384014.svg"
    },
    {
      "id":7,
      "name":"Behance",
      "link":"https://image.flaticon.com/icons/svg/49/49403.svg"
    },
    {
      "id":8,
      "name":"Pinterest",
      "link":"https://image.flaticon.com/icons/png/512/49/49440.png"
    },
    {
      "id":9,
      "name":"Snapchat",
      "link":"https://image.flaticon.com/icons/svg/1384/1384018.svg"
    },
    {
      "id":10,
      "name":"WhatsApp",
      "link":"https://www.flaticon.com/premium-icon/icons/svg/2956/2956149.svg"
    },
    {
      "id":11,
      "name":"Skype",
      "link":"https://image.flaticon.com/icons/svg/1384/1384010.svg"
    },
    {
      "id":12,
      "name":"tumblr",
      "link":"https://image.flaticon.com/icons/png/512/49/49323.png"
    },
    {
      "id":13,
      "name":"Deezer",
      "link":"https://image.flaticon.com/icons/png/512/49/49383.png"
    },
    {
      "id":14,
      "name":"DropBox",
      "link":"https://image.flaticon.com/icons/svg/91/91946.svg"
    },
    {
      "id":15,
      "name":"YouTube",
      "link":"https://image.flaticon.com/icons/png/512/1384/1384012.png"
    },
    {
      "id":16,
      "name":"SoundCloud",
      "link":"https://image.flaticon.com/icons/svg/49/49336.svg"
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

}
