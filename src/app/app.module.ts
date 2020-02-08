import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {RouterModule} from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import {FormsModule} from "@angular/forms";
import { Page5Component } from './page5/page5.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/index', pathMatch: 'full'},
      {path: 'index', component: MainMenuComponent},
      {path: 'page1', component: Page1Component},
      {path: 'page2', component: Page2Component},
      {path: 'page3', component: Page3Component},
      {path: 'page4', component: Page4Component},
      {path: 'page5', component: Page5Component},
      {path: '**', redirectTo: '/index', pathMatch: 'full'}
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
