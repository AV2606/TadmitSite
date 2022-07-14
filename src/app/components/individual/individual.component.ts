import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProject, Strings } from 'src/app/classes/strings';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {

  
  strings=Strings;
  innerText:string;
  info:IProject;
  slideIndex = 1;
  currentSlide=0
  sliders:number;

  constructor(private router:Router) 
  {
    this.innerText=router.url.split('/')[router.url.split('/').length-1];
    this.info=this.strings.projects.filter(x=>x.title==this.innerText)[0];
    this.sliders=this.info.imagesUrls.length;
  }

  ngOnInit(): void {
  }
  

}
