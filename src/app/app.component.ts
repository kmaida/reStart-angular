import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MediacheckService } from './core/ui/mediacheck.service';
import { MqviewService } from './core/ui/mqview.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navOpen: boolean;
  minHeight: string;
  private _initWinHeight = 0;

  constructor(
    private mc: MediacheckService,
    private mqview: MqviewService) { }

  ngOnInit() {
    this._setUpResponsive();
    this._setUpNavControl();
  }

  private _setUpResponsive() {
    // determine which media query is active on initial load and set
    this.mqview.setIsLarge(this.mc.check('large'));

    // set up listener for entering 'small' media query
    this.mc.onMqChange('small', (mql) => {
      this.mqview.setIsLarge(false);
    });

    // set up listener for entering 'large' media query
    this.mc.onMqChange('large', (mql) => {
      this.mqview.setIsLarge(true);
    });
  }

  private _setUpNavControl() {
    Observable.fromEvent(window, 'resize')
      .debounceTime(200)
      .subscribe((event) => {
        this._resizeFn(event);
      });

    this._initWinHeight = window.innerHeight;
    this._resizeFn(null);
  }

  private _resizeFn(e) {
    const winHeight: number = e ? e.target.innerHeight : this._initWinHeight;
    this.minHeight = `${winHeight}px`;
  }

  navToggledHandler(e: boolean) {
    this.navOpen = e;
  }

}
