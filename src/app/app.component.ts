import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'efha-projet';
  highContrast = false;
  overlayTypeGeneral = 'overlay-light';
  typeContraste = 'Mode contraste haut';
  pageName = 'index';
  clickHamburger = false;

  ngOnInit(): void {
  }

  public constructor(private titleService: Title, private router: Router) {
    router.events.subscribe((val) => {
      this.pageName = router.url;
    });
  }

  changeContrast(): any {
    this.highContrast = !this.highContrast;

    if (this.highContrast) {
      this.overlayTypeGeneral = 'overlay-dark';
      this.typeContraste = 'Mode contraste bas';
    } else {
      this.overlayTypeGeneral = 'overlay-light';
      this.typeContraste = 'Mode contraste haut';
    }
    console.log(this.pageName);
  }

  getPageName(): string {
    const fullName = this.pageName.split('#');
    return fullName[0];
  }

  checkPage(page) {
    return (this.pageName.split('#')[0] === '/' + page || this.pageName.split('?')[0] === '/' + page);
  }

  isPageSelected(page) {
    return ((this.pageName) === '/' + page);
  }

  changeHamburger() {
    this.clickHamburger = !this.clickHamburger;
  }
}
