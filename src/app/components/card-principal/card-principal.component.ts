import { Component, OnInit, Input } from '@angular/core';




@Component({
  selector: 'app-card-principal',
  templateUrl: './card-principal.component.html',
  styleUrls: ['./card-principal.component.scss']
})
export class CardPrincipalComponent implements OnInit {
   
  
@Input() public imageLink:string 
  data:any;

  constructor() {
    setTimeout(()=>{
      this.data = JSON.parse(window.localStorage.getItem("dataSelect"));  
    },1000);  
  }
  

  ngOnInit() {
  }
 
  
    

  
}
