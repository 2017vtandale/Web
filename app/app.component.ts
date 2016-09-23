import { Component } from '@angular/core';
import { labs } from './labs';
@Component({
  selector: 'head-center',
  template: `
  <div class="Title">
        <h1>Vishal Tandale Web Labs</h1>

    </div>
    <div class="Links">
        <ol>
          <li><a href = "./Lab0_Content/Lab00.html">Lab 0 Content</a></li>
          <li><a href = "./Lab1-Creating_HTML_Form">Lab 1 Forms</a></li>
        </ol>
    </div>
  `
})
export class AppComponent { }
