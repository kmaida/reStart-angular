import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small',
  template: `
    <ul>
      <li *ngFor="let animal of animals">{{animal.name}} ({{animal.class}})</li>
    </ul>
  `,
  styles: [``]
})
export class SmallComponent {
  @Input() animals: {[key: string]: string}[];
}
