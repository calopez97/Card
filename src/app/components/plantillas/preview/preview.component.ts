import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  public profesion: string = "Gerente de ventas";

  public nombres: string = "Ana Lisa Melchoto";

  public logoimage: string = "https://icardlink.me/recursos/2020/05/logo-ejemplo.png";

  public profileimage: string = "https://icardlink.me/recursos/2020/05/Anastasia-Marin.jpg";

  jsonData:any;
  jsonLogo: any;
  jsonColor: any;
  jsonIconColor: any;
  values: any;
  BkColor: any;
  fontSize: any;
  icons: any;
  IconSize: any;
  roudingValue: any;


  constructor() { }

  ngOnInit(): void {
      this.getData();
      this.getLogo();
      this.getColor();
      this.getColorIcon();
      this.getValues();
      this.getBkColor();
      this.getFontSize();
      this.getIcons();
      this.getIconSize();
      this.getRoudingValue();
  }


  getData(){
    var data=window.localStorage.getItem("dataSelect");
    
    this.jsonData=JSON.parse(data);
    
     setTimeout(() => {
    this.getData();
  }, 500);
  }

  
  getLogo(){
    var log=window.localStorage.getItem("selectLogo");

    this.jsonLogo=JSON.parse(log);
    setTimeout(() => {
      this.getLogo();
    }, 500);

  }

  getColor(){
    var color = window.localStorage.getItem("selectColor");

    this.jsonColor = JSON.parse(color);
    setTimeout(() => {
      this.getColor();
    }, 500);
  }

  getColorIcon(){
    var color = window.localStorage.getItem("selectIconColor");

    this.jsonIconColor = JSON.parse(color);
    setTimeout(() => {
      this.getColorIcon();
    }, 500);
  }

  getValues(){
    var values= window.localStorage.getItem("Values");
    this.values = JSON.parse(values);

    setTimeout(() => {
      this.getValues();
    }, 500);
  }

  getBkColor(){
    var bkground= window.localStorage.getItem("BkColor");
    this.BkColor=JSON.parse(bkground);

    setTimeout(() => {
      this.getBkColor();
    }, 500);
  }

  getFontSize(){
    var size = window.localStorage.getItem("size");
    this.fontSize=size;

    setTimeout(() => {
      this.getFontSize();
    }, 500);
  }

  getIcons(){
    var icon = window.localStorage.getItem("icons")
    this.icons= JSON.parse(icon);


    setTimeout(() => {
      this.getIcons();
    }, 500);
  }

  getIconSize(){
    var isize = window.localStorage.getItem("IconSize")
    this.IconSize=isize;
    
    setTimeout(() => {
      this.getIconSize();
    }, 500);
  }

  getRoudingValue(){
    
    var roudvalue = window.localStorage.getItem("roudcorner")
    this.roudingValue = roudvalue;

    setTimeout(() => {
      this.getRoudingValue();
    }, 500);
  }
}

