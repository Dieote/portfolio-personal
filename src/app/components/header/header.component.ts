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
  closeMenu() {
    this.menuIconActive = false;
  }

  constructor() {}

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    const header = document.querySelector('header');
    if (header) {
      header.classList.toggle('sticky', window.scrollY > 100);
    }
  }
}
