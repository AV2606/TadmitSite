import { Component, OnInit } from '@angular/core';
import { Strings } from 'src/app/classes/strings';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  strings=Strings;
  about=getAboutAsArray();

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
function getAboutAsArray() {
  let r=[];
  let s=Strings as any;
  for(let chapter in s.about){
    r.push(s.about[chapter]);
  }
  return r;
}

