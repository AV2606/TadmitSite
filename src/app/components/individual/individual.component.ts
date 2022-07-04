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

  constructor(private router:Router) 
  {
    this.innerText=router.url.split('/')[router.url.split('/').length-1];
    this.info=this.strings.projects.filter(x=>x.title==this.innerText)[0];
    this.info.imagesUrls[0];
  }

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
  }


// Next/previous controls
 plusSlides(n: number) {
  this.showSlides(this.slideIndex += n);
}

// Thumbnail image controls
currentSlide(n: number) {
  this.showSlides(this.slideIndex = n);
}

showSlides(n: number) {
  let i;
  let slides:any = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {this.slideIndex = 1}
  if (n < 1) {this.slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.add(dots[i].className.replace(" active", ""));
  }
  slides[this.slideIndex-1].style.display = "block";
  dots[this.slideIndex-1].className += " active";
}

}
