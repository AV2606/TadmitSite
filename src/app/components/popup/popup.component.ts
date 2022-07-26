import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  
  show=true;

  @Input() title:string ='';
  @Input() text:string ='';
  constructor() { }

  ngOnInit(): void {
  }
  close(){
    this.show=false;
  }

}
