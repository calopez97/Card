import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  show=true;
  isOn=true; 
  title = 'cards';
  sendChangeTitle = '¡SELECT TEMPLATE!';
  sendLink = '';

  

  ngOnInit() { }

  processChange(getText) {
    this.sendChangeTitle = getText;
  }


  change(){
    this.isOn=!this.isOn;
  }

  showIn(){
    this.show= !this.show;
  }
  // processLink(getLink){
  //   console.log("HelloWorld." + getLink);
  //   this.sendLink = getLink;
  // }
}
