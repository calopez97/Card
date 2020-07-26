import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  
  public profesion: string = "Gerente de ventas";

  public nombres: any = "Ana Lisa Melchoto";

  logoimage:any = "https://icardlink.me/recursos/2020/05/logo-ejemplo.png";

  public profileimage: string = "https://icardlink.me/recursos/2020/05/Anastasia-Marin.jpg";

  fondo:any = "#333333"

  colorName: string;

 letterSize: number;
  
 colorProf: string;
 
 icon:any;

 iconSize: number;
 
 roudValue: number;

iconColor: string;



  // jsonLogo: any;
  // jsonColor: any;
  // jsonProfColor: any;
  // values: any;
  // BkColor: any;
  // fontSize: any;
  // icons: any;
  // IconSize: any;
  // roudingValue: any;
  // linksn: any;
  


  constructor(private dataService:DataService) { }

  ngOnInit(): void {
      // this.getData();
      // this.getLogo();
      // this.getColor();
      // this.getColorProf();
      // this.getValues();
      // this.getBkColor();
      // this.getFontSize();
      // this.getIcons();
      // this.getIconSize();
      // this.getRoudingValue();
      // this.getPersonalLink(); 

      this.dataService.nombre$.subscribe(backgr =>{
        this.fondo = backgr;
      })

      this.dataService.changeLogo$.subscribe(logo =>{
        this.logoimage=logo;
      })

      this.dataService.profileData$.subscribe(data =>{
        this.nombres= data
      })

      this.dataService.letterSize$.subscribe(lettersize =>{
        this.letterSize=lettersize; 
      })

      this.dataService.changeColor$.subscribe(colorN =>{
        this.colorName=colorN;
      })
      
      this.dataService.changeColorProf$.subscribe(valueColor=>{
        this.colorProf=valueColor;
      })

      this.dataService.icon$.subscribe(icon =>{
        this.icon=icon; 
      })

      this.dataService.changeSizeIcon$.subscribe(size=>{
        this.iconSize=size; 
      })

      this.dataService.roudingCorners$.subscribe(roud =>{
        this.roudValue=roud;
      })

      this.dataService.changeColorIcon$.subscribe(coloricon =>{
        this.iconColor=coloricon;
      })
  }


  // getData(){
  //   var data=window.localStorage.getItem("dataSelect");
    
  //   this.jsonData=JSON.parse(data);
    
  //    setTimeout(() => {
  //   this.getData();
  // }, 500);
  // }

  
  // getLogo(){
  //   var log=window.localStorage.getItem("selectLogo");

  //   this.jsonLogo=JSON.parse(log);
  //   setTimeout(() => {
  //     this.getLogo();
  //   }, 500);

  // }

  // getColor(){
  //   var color = window.localStorage.getItem("selectColor");

  //   this.jsonColor = JSON.parse(color);
  //   setTimeout(() => {
  //     this.getColor();
  //   }, 500);
  // }

  // getColorProf(){
  //   var color = window.localStorage.getItem("selectProfColor");

  //   this.jsonProfColor = JSON.parse(color);
  //   setTimeout(() => {
  //     this.getColorIcon();
  //   }, 500);
  // }

  // getValues(){
  //   var values= window.localStorage.getItem("Values");
  //   this.values = JSON.parse(values);

  //   setTimeout(() => {
  //     this.getValues();
  //   }, 500);
  // }

  // getBkColor(){
  //   var bkground= window.localStorage.getItem("BkColor");
  //   this.BkColor=JSON.parse(bkground);

  //   setTimeout(() => {
  //     this.getBkColor();
  //   }, 500);
  // }

  // getFontSize(){
  //   var size = window.localStorage.getItem("size");
  //   this.fontSize=size;

  //   setTimeout(() => {
  //     this.getFontSize();
  //   }, 500);
  // }

  // getIcons(){
  //   var icon = window.localStorage.getItem("icons")
  //   this.icons= JSON.parse(icon);


  //   setTimeout(() => {
  //     this.getIcons();
  //   }, 500);
  // }

  // getIconSize(){
  //   var isize = window.localStorage.getItem("IconSize")
  //   this.IconSize=isize;
    
  //   setTimeout(() => {
  //     this.getIconSize();
  //   }, 500);
  // }

  // getRoudingValue(){
    
  //   var roudvalue = window.localStorage.getItem("roudcorner")
  //   this.roudingValue = roudvalue;

  //   setTimeout(() => {
  //     this.getRoudingValue();
  //   }, 500);
  // }

  // getPersonalLink(){
    
  //   var link=window.localStorage.getItem("linksn");
  //   this.linksn=JSON.parse(link)
    
  //   setTimeout(() => {
  //     this.getPersonalLink();
  //   }, 500);

  // }
}

