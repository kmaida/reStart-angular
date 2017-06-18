import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: `
    <p>I am a template included by a component.</p>
    <ng-content select="[slot-1]"></ng-content>
    <ng-content select="[slot-2]"></ng-content>
  `,
  styles: [`
    /deep/ .sample-styled {
      color: green;
    }
  `]
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
