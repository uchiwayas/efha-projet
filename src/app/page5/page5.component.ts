import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component implements OnInit {

  public constructor(private titleService: Title, private router: Router) {
  }

  ngOnInit() {
    this.setTitle('Handicap auditif | Game-Access');
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

}
