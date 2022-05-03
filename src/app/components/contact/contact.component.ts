import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  imgs:any={
    chsarp:'csharp.png',
    android_studio:'adroid_studio.png',
    html:'html.ico',
    angular:'angular.png',
    css:'css.ico',
    entityFrameWork:'entityfw.png',
    java:'java.png',
    js:'js.webp',
    net:'net.png',
    nodejs:'nodejs.png',
    sass:'sass.png',
    sql:'sql.png',
    ts:'ts.png'
  }
  counter=0;
  prefix='assets/icons/';
  img=this.prefix+this.imgs.net;

  constructor() { }

  ngOnInit(): void {
  }
  changeSvg(){
    let inner=0;
    for (const mem in this.imgs) {
      if(inner%13==this.counter){
        this.img=this.prefix+this.imgs[mem];
        this.counter++;
        this.counter%=13;
        break;
      }
      inner++
    }
  }

}

