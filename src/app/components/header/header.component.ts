import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
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

  private readonly onScroll = (): void => {
    const header = document.querySelector('header');
    if (header) {
      header.classList.toggle('sticky', window.scrollY > 100);
    }
  };
}
