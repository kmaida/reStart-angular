import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UtilsService } from '../../core/utils.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styles: [`
    .transcluded {
      color: red;
    }
  `]
})
export class SubComponent implements OnInit {
  pageName = 'Subpage';

  constructor(
    private titleService: Title,
    private global: UtilsService) { }

  ngOnInit() {
    this.titleService.setTitle(`${this.global.siteTitle} ${this.pageName}`);
  }

}
