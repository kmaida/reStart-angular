import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { MediacheckService } from './core/ui/mediacheck.service';
import { MqviewService } from './core/ui/mqview.service';
import { JSONDataService } from './core/JSONData.service';
import { UtilsService } from './core/utils.service';
import { DatePipe } from '@angular/common';
import { FilterSortService } from './core/filter-sort.service';

import { AppComponent } from './app.component';
import { LoadingComponent } from './core/ui/loading.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { SubComponent } from './pages/sub/sub.component';
import { SampleComponent } from './pages/sub/sample.component';
import { HomeComponent } from './pages/home/home.component';
import { LargeComponent } from './pages/home/large.component';
import { SmallComponent } from './pages/home/small.component';
import { Error404Component } from './pages/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    SubComponent,
    SampleComponent,
    HomeComponent,
    LargeComponent,
    SmallComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Title,
    MediacheckService,
    MqviewService,
    JSONDataService,
    UtilsService,
    DatePipe,
    FilterSortService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
