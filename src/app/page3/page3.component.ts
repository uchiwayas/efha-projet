import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  public constructor(private titleService: Title, router: Router) {
  }

  ngOnInit() {
    this.setTitle('Contact - Game-Access');
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
