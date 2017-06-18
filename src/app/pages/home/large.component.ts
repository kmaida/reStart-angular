import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-large',
  template: `
    <table class="table">
      <thead>
        <tr>
          <th>Animal</th>
          <th>Class</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let animal of animals">
          <td>{{animal.name}}</td>
          <td>{{animal.class}}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [``]
})
export class LargeComponent {
  @Input() animals: {[key: string]: string}[];
}
