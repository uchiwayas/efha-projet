import {Component, Input, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  @Input() overlayType;

  public constructor(private titleService: Title, router: Router) {
    //console.log(router.url);
  }

  ngOnInit() {
    this.setTitle('Game-Access');
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

}
