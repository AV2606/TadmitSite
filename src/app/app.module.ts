import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//components
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { SocialsComponent } from './components/socials/socials.component';




const paths=[
  {path:'',component:MainComponent},
  {path:'about',component:AboutComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    SocialsComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(paths),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
