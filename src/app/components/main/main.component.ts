import { Component, OnInit } from '@angular/core';
import { Strings as strings } from 'src/app/classes/strings';
import { RandomService } from 'src/app/services/random.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  Strings=strings;
  cspng:HTMLElement|null=null;
  javapng:HTMLElement|null=null;
  csspng:HTMLElement|null= null;
  htmlpng:HTMLElement|null=null;
  tspng:HTMLElement|null=null;
  jspng:HTMLElement|null=null;
  sqlpng:HTMLElement|null=null;

  netpng: HTMLElement | null=null;
  angularpng: HTMLElement | null=null;
  androidstudiopng: HTMLElement | null=null;
  nodepng: HTMLElement | null=null;
  asppng: HTMLElement | null=null;
  vanillapng: HTMLElement | null=null;
  entitypng: HTMLElement | null=null;

  hoverup="hover";

  animations: Promise<void>[] = this.getAnimations();


  constructor(private Random:RandomService) {
    
  }

  ngOnInit(): void {
    this.cspng=document.getElementById('cspng');
    this.javapng=document.getElementById('javapng');
    this.csspng=document.getElementById('csspng');
    this.htmlpng=document.getElementById('htmlpng');
    this.tspng=document.getElementById('tspng');
    this.jspng=document.getElementById('jspng');
    this.sqlpng=document.getElementById('sqlpng');
    this.netpng=document.getElementById('netpng');
    this.angularpng=document.getElementById('angularpng');
    this.androidstudiopng=document.getElementById('androidstudiopng');
    this.nodepng=document.getElementById('nodepng');
    this.asppng=document.getElementById('asppng');
    this.vanillapng=document.getElementById('vanillapng');
    this.entitypng=document.getElementById('entitypng');
    let langs=document.getElementById("langsContainer");
    if(this.cspng!=null)
      this.cspng.addEventListener("mouseover",()=>{
        console.log("listened");
        console.log(langs);
        //this.hoverup="hover";
        if(langs)
        langs.classList.add("hover");
      });
    this.animateInLangsAsync();
  }
  async animateInLangsAsync(){
    let anims:any[]=[];
    let i=0;
    while(this.animations.length>0){
    let rnd=this.Random.getRandomInt(0,this.animations.length-1);
    let o=null;
    o=await this.animations.splice(rnd,1)[0];
    anims.push(o);
    }
    for (const iterator of anims) {
      iterator();
      await new Promise(resolve=>{setTimeout(resolve,250)});
    }

  }
  /**
   * 
   * @param duration in milliseconds for the animation
   */
  async animateInOneLangAsync(element:HTMLElement|null,duration:number){
    if(element == null)
        return;
    //the time it takes to animate 1% of the animation. the animation has 100 parts.
    let percentInterval=duration/100;
    for(let i=0;i<=100;i++){
      await new Promise(resolve=>{
        setTimeout(()=>{
          element.style.opacity=""+(i/100);
          resolve(0);
        },percentInterval);
      });
    }
  }
  getAnimations(): any[] {
    let arr:any[]=[];
    arr.push(async ()=>{
    this.animateInOneLangAsync(this.cspng,1000);
    await new Promise(resolve=>{setTimeout(resolve,500)});
    });
    arr.push(async()=>{
    this.animateInOneLangAsync(this.javapng,1000);
    await new Promise(resolve=>{setTimeout(resolve,500)});
    });
    arr.push(async()=>{
    this.animateInOneLangAsync(this.tspng,1000);
    await new Promise(resolve=>{setTimeout(resolve,500)});
    });
    arr.push(async()=>{
    this.animateInOneLangAsync(this.jspng,1000);
    await new Promise(resolve=>{setTimeout(resolve,500)});
    });
    arr.push(async()=>{
    this.animateInOneLangAsync(this.csspng,1000);
    await new Promise(resolve=>{setTimeout(resolve,500)});
    });
    arr.push(async()=>{
    this.animateInOneLangAsync(this.htmlpng,1000);
    await new Promise(resolve=>{setTimeout(resolve,500)});
    });
    arr.push(async()=>{
    this.animateInOneLangAsync(this.sqlpng,1000);
    await new Promise(resolve=>{setTimeout(resolve,500)});
    });
    arr.push(async()=>{
    this.animateInOneLangAsync(this.netpng,1000);
    await new Promise(resolve=>{setTimeout(resolve,500)});
    });
    arr.push(async()=>{
    this.animateInOneLangAsync(this.angularpng,1000);
    await new Promise(resolve=>{setTimeout(resolve,500)});
    });
    arr.push(async()=>{
    this.animateInOneLangAsync(this.androidstudiopng,1000);
    await new Promise(resolve=>{setTimeout(resolve,500)});
    });
    arr.push(async()=>{
    this.animateInOneLangAsync(this.nodepng,1000);
    await new Promise(resolve=>{setTimeout(resolve,500)});
    });
    arr.push(async()=>{
    this.animateInOneLangAsync(this.asppng,1000);
    await new Promise(resolve=>{setTimeout(resolve,500)});
    });
    arr.push(async()=>{
    this.animateInOneLangAsync(this.vanillapng,1000);
    await new Promise(resolve=>{setTimeout(resolve,500)});
    });
    arr.push(async()=>{
    this.animateInOneLangAsync(this.entitypng,1000);
    await new Promise(resolve=>{setTimeout(resolve,500)});
    });
    return arr;
  }

}

