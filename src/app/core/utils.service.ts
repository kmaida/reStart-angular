import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  greeting = 'Hello';
  siteTitle = 'reStart-angular | ';

  alertGreeting(name: string) {
    alert(`${this.greeting}, ${name}!`);
  }

}
