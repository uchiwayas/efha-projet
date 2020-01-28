import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  public constructor(private titleService: Title, router: Router) {
    //console.log(router.url);
  }

  ngOnInit() {
    this.setTitle('Page 1 - Game-Access');
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

}
