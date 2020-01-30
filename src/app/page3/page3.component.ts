import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  showNameError = false;
  showMessageError = false;
  showSubmit = false;
  nom: string;
  message: string;

  public constructor(private titleService: Title, router: Router) {
  }

  ngOnInit() {
    this.setTitle('Contact - Game-Access');
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  onSubmit() {
    this.showNameError = false;
    this.showMessageError = false;
    if (this.nom === undefined || this.nom.trim() === '' ) {
      this.showNameError = true;
    }
    if (this.message === undefined || this.message.trim() === '') {
      this.showMessageError = true;
    }
    this.showSubmit = false;
    if (!this.showMessageError && !this.showNameError) {
      this.showSubmit = true;
    }
  }
}
