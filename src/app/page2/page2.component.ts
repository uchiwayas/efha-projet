import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  public constructor(private titleService: Title, router: Router) {
  }

  ngOnInit() {
    this.setTitle('Page 2 - Game-Access');
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
