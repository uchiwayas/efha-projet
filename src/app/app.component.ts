import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'efha-projet';

  highContrast = false;
  overlayType = 'overlay-light';
  typeContraste = 'Mode contraste haut';

  changeContrast(): any {
    this.highContrast = !this.highContrast;

    if (this.highContrast) {
      this.overlayType = 'overlay-dark';
      this.typeContraste = 'Mode contraste bas';
    } else {
      this.overlayType = 'overlay-light';
      this.typeContraste = 'Mode contraste haut';
    }
  }
}
