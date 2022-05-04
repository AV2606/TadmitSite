import { Component, OnInit } from '@angular/core';
import { Strings as strings } from 'src/app/classes/strings';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  Strings=strings;

  constructor() { }

  ngOnInit(): void {
  }

}
