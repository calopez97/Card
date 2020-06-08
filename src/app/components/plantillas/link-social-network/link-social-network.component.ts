import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-link-social-network',
  templateUrl: './link-social-network.component.html',
  styleUrls: ['./link-social-network.component.scss']
})
export class LinkSocialNetworkComponent implements OnInit {
  formlink: FormGroup;

  constructor(private FormBuilder: FormBuilder) { 
    this.BuildForm();
  }

  ngOnInit(): void {
  }

  private BuildForm(){
    this.formlink = this.FormBuilder.group({
      linktwt : [''],
      linkgpls: [''],
      linkfb: [''],
      linkinsta: [''],
      linkspotify:[''],
      linkin:[''],
      linkbe:[''],
      linkp:[''],
      linkschat:[''],
      linkWsp:[''],
      linkskype:[''],
      linktblr: [''],
      linkdeezer:[''],
      linkdropbox:[''],
      linkYt:[''],
      linkSoundcloud:['']
    })
  }

  save(event:Event){
    event.preventDefault()
    const value=this.formlink.value;
    console.log(value); 
}
}
