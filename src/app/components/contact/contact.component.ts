import { HttpClient } from '@angular/common/http';
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

  constructor(private httpClient:HttpClient) { }

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
  submit(form:any){
    let {name,email,title,content}=form.value;
    let json={name,email,title,content,_captcha:false};
    // this.httpClient.post('https://formsubmit.co/avichay593@gmail.com',JSON.stringify(json)).subscribe(
    //   (data:any)=>{
    //    alert("Form has been sent, thank you!"); 
    //   },
    //   (error:any)=>{
    //    alert("Form has been sent, thank you!"); 
    //   },
    //   ()=>{
    //     alert("Form has been sent, thank you!"); 
    //     }
    // );
    let form1:any = document.getElementById('formid');
    form1.addEventListener('submit', function(e:any) {
        alert("pervented default");
        //alert("pervented default");
        e.preventDefault();
        let formData = new FormData(form1);
        fetch('https://formsubmit.co/avichay593@gmail.com', {
            //return response.text();
        }).then(function(data) {
            //console.log(data);
            //let body=document.getElementsByName('body')[0];
            //let body=document.getElementById("body");
            //body.innerHTML=data;
            console.log(data);
            
        }).then(function() {
           alert('Thank you for your message!');
        });
          }
           );
  }
  async sendContact(){
    console.log("contacting");
    //let req=ContactRequest.GenerateContactRequest();
    //req.AddAddressField("Test");
    //req.AddEmailField("Test12@mail.com");
    //req.AddFirstNameField("Test name");
    //req.AddMessageField("Test message");
    //req.AddPhoneField("Test phone");
    //req.AddSubjectField("Test subject");
    //let result=await req.Send(this.httpClient);
    //console.log(result);
    //alert(result);
  }

}

