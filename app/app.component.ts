import { Component } from '@angular/core';
import { labs } from './labs';
@Component({
  selector: 'head-center',
  template: `
  <div class="Title">
        <h1>Vishal Tandale Web Labs</h1>
    </div>
    <div class="Links">
        <labs-list></labs-list>
    </div>
  `
})
export class AppComponent { }
