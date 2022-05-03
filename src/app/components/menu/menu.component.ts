import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesName } from 'src/app/enums/RoutesNames';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  routes=RoutesName;
  current=this.routes.Home;

  constructor(private router:Router) { 
    router.events.subscribe((val)=>this.onRouteChange(val));
  }

  ngOnInit(): void {
  }
  onRouteChange(value:any){
    this.current=this.routes.Home;
    if(this.router.url==='/about')
      this.current=this.routes.About;
    if(this.router.url==='/projects')
      this.current=this.routes.Projects;
    if(this.router.url==='/contact')
      this.current=this.routes.Contact;
  }

}
