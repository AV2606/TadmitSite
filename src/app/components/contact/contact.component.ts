import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  imgs: any = {
    chsarp: 'csharp.png',
    android_studio: 'adroid_studio.png',
    html: 'html.ico',
    angular: 'angular.png',
    css: 'css.ico',
    entityFrameWork: 'entityfw.png',
    java: 'java.png',
    js: 'js.webp',
    net: 'net.png',
    nodejs: 'nodejs.png',
    sass: 'sass.png',
    sql: 'sql.png',
    ts: 'ts.png'
  }
  counter = 0;
  prefix = 'assets/icons/';
  img = this.prefix + this.imgs.net;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  changeSvg() {
    let inner = 0;
    for (const mem in this.imgs) {
      if (inner % 13 == this.counter) {
        this.img = this.prefix + this.imgs[mem];
        this.counter++;
        this.counter %= 13;
        break;
      }
      inner++
    }
  }
  submit(form: any) {
    let { name, email, title, content } = form.value;
    let form1: any = document.getElementById('formid');
    form1.addEventListener('submit', function (e: any) {
      e.preventDefault();
         var f = document.createElement('form');
         f.action = 'https://formsubmit.co/08f5ae114b0950c9cf63c54415ebc607';
         f.method = 'POST';
         f.target = '_blank';

        var i = document.createElement('input');
        i.type = 'name';
        i.name = 'name';
        i.value = name;
        f.appendChild(i);

        var em = document.createElement('input');
        em.type = 'email';
        em.name = 'email';
        em.value = email;
        f.appendChild(em);

        var t = document.createElement('input');
        t.type = 'text';
        t.name = 'title';
        t.value = title;
        f.appendChild(t);

        var c = document.createElement('input');
        c.type = 'text';
        c.name = 'content';
        c.value = content;
        f.appendChild(c);

        document.body.appendChild(f);
         f.submit();
     }
    );
  }
  async sendContact() {
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

