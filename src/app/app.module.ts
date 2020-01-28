import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {RouterModule} from '@angular/router';
import { Page1Component } from './page1/page1.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    Page1Component
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: MainMenuComponent },
      { path: 'index', component: MainMenuComponent },
      { path: 'page1', component: Page1Component }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
