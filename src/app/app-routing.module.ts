import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SubComponent } from './pages/sub/sub.component';
import { Error404Component } from './pages/error404/error404.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'subpage',
        component: SubComponent
      },
      {
        path: '**',
        component: Error404Component
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
