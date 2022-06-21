import { Component, OnInit } from '@angular/core';
import { Strings } from 'src/app/classes/strings';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  strings=Strings;

  constructor() { }

  ngOnInit(): void {
  }

}
