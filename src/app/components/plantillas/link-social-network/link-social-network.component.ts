import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-link-social-network',
  templateUrl: './link-social-network.component.html',
  styleUrls: ['./link-social-network.component.scss']
})
export class LinkSocialNetworkComponent implements OnInit {
  formlink: FormGroup;
  iconname: any;

  constructor(private FormBuilder: FormBuilder) { 
    this.BuildForm();
  }

  ngOnInit(): void {
    this.getIconName();
  }

  private BuildForm(){
    this.formlink = new FormGroup({
      link: new FormControl(''),
    })
  }

  save(event:Event){
    event.preventDefault()
    
    const value=this.formlink.value;

    window.localStorage.setItem("linksn", JSON.stringify(value));

  }



  getIconName(){
    var iconname= window.localStorage.getItem("icons");
    this.iconname=JSON.parse(iconname); 

    setTimeout(() => {
      this.getIconName();
    }, 500);
  }

}
