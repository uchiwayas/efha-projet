import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {RouterModule} from '@angular/router';
import { Page1Component } from './handicap-visuel/page1.component';
import { Page2Component } from './handicap-moteur/page2.component';
import { Page3Component } from './page-contact/page3.component';
import { Page4Component } from './plan-du-site/page4.component';
import {FormsModule} from "@angular/forms";
import { Page5Component } from './handicap-auditif/page5.component';

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
      {path: 'handicap-visuel', component: Page1Component},
      {path: 'handicap-moteur', component: Page2Component},
      {path: 'page-contact', component: Page3Component},
      {path: 'plan-du-site', component: Page4Component},
      {path: 'handicap-auditif', component: Page5Component},
      {path: '**', redirectTo: '/index', pathMatch: 'full'}
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
