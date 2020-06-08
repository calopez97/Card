import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cards';
  sendChangeTitle = '';
  sendLink = '';

  ngOnInit() { }

  processChange(getText) {
    this.sendChangeTitle = getText;
  }

  // processLink(getLink){
  //   console.log("HelloWorld." + getLink);
  //   this.sendLink = getLink;
  // }
}
