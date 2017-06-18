import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { MediacheckService } from '../../core/ui/mediacheck.service';
import { MqviewService } from '../../core/ui/mqview.service';
import { JSONDataService } from '../../core/JSONData.service';
import { UtilsService } from '../../core/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  pageName = 'Home';
  data: {[key: string]: any};
  loading = true;
  mqSub: Subscription;
  name = 'Visitor';
  displaySize: string;

  constructor(
    private titleService: Title,
    public mqview: MqviewService,
    private mc: MediacheckService,
    private jsonData: JSONDataService,
    public global: UtilsService) { }

  ngOnInit() {
    this.loading = true;
    this.titleService.setTitle(`${this.global.siteTitle} ${this.pageName}`);

    this.mqSub = this.mqview.isLarge$.subscribe(
      isLarge => this.displaySize = isLarge ? 'Table (large view)' : 'List (small view)'
    );

    this.getData();
  }

  getData() {
    this.jsonData.getData$()
      .subscribe(
        res => {
          this.data = res;
          this.loading = false;
        },
        err => {
          console.error(err);
          this.loading = false;
        }
      );
  }

  get isLoaded() {
    return this.loading === false;
  }

  ngOnDestroy() {
    this.mqSub.unsubscribe();
  }

}
