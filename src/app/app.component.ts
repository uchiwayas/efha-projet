import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'efha-projet';
  highContrast = false;
  overlayTypeGeneral = 'overlay-light';
  typeContraste = 'Mode contraste haut';
  pageNb = 0;

  changeContrast(): any {
    this.highContrast = !this.highContrast;

    if (this.highContrast) {
      this.overlayTypeGeneral = 'overlay-dark';
      this.typeContraste = 'Mode contraste bas';
    } else {
      this.overlayTypeGeneral = 'overlay-light';
      this.typeContraste = 'Mode contraste haut';
    }
  }

  changePage(nb: number) {
    this.pageNb = nb;
  }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }
}
