import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  currentSlide: number;
  sliders: number;
  loadedfully=false;

  @Input() imagesUrls: string[] = [];
  constructor() {
    this.currentSlide = 0;
    this.sliders=0;
  }
  
  async ngOnInit() {
    this.sliders = this.imagesUrls.length;
    await this.showFirst();
    //this.showItem(0);
  }
  //Makes sure that the first slide is shown
  async showFirst(){
    while(!this.loadedfully){
      await new Promise(r => setTimeout(r, 100));
    }
    this.showItem(0);
  }
  //Makes the ui inform when it is loaded fully
  //cause angular is not able to detect it correctly
  loaded(){
    this.loadedfully=true;
  }
  showItem(index:number){
    this.hideItem(this.currentSlide);
    this.currentSlide=index%this.sliders;
    if(this.currentSlide<0)
      this.currentSlide=this.sliders-1;
    let item=document.getElementById(`item-${this.currentSlide}`);
    if(item!=null){
      item.style.display="flex";
      item.classList.add("fade");
      let button=document.getElementById(`button-${this.currentSlide}`);
      button?.classList.add("active");
    }
  }
  hideItem(index:number){
    let item=document.getElementById(`item-${index}`);
    if(item!=null){
      item.style.display="none";
      item.classList.remove("fade");
      let button=document.getElementById(`button-${index}`);
      button?.classList.remove("active");
    }
  }
}