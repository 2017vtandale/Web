import {labs} from './labs';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'labs-list',
  template:`
  <div *ngFor ="let lab of Lablists">
  <p>
  <span class = "lab-name"> {{lab.Name}}  </span>: <a href = {{lab.link}}> Lab{{lab.num}}  </a>
  </p>
  </div>
  `
})

export class LabsComponent {
  Lablist: labs[]= [
    {Name:"My First Lab",link:"../Lab0_Content/index.html", num:0}
  ];
  console.log(labs);
}
