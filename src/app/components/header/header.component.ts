import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuIconActive = false;

  openIconActive() {
    this.menuIconActive = !this.menuIconActive;
  }
}
