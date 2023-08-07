import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio-personal';

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([
        `(max-width: ${this.getBreakpoint('md')})`,
        `(max-width: ${this.getBreakpoint('lg')})`,
        `(max-width: ${this.getBreakpoint('xl')})`,
      ])
      .subscribe((result) => {
        if (result.matches) {
          console.log('Pantalla pequeña o dispositivo en orientación retrato');
        } else {
          console.log('Pantalla grande o dispositivo en orientación apaisada');
        }
      });
  }
  getBreakpoint(breakpoint: string): string {
    switch (breakpoint) {
      case 'xs':
        return getComputedStyle(document.documentElement).getPropertyValue(
          '--breakpoint-xs'
        );
      case 'sm':
        return getComputedStyle(document.documentElement).getPropertyValue(
          '--breakpoint-sm'
        );
      case 'md':
        return getComputedStyle(document.documentElement).getPropertyValue(
          '--breakpoint-md'
        );
      case 'lg':
        return getComputedStyle(document.documentElement).getPropertyValue(
          '--breakpoint-lg'
        );
      case 'xl':
        return getComputedStyle(document.documentElement).getPropertyValue(
          '--breakpoint-xl'
        );
      case 'xxl':
        return getComputedStyle(document.documentElement).getPropertyValue(
          '--breakpoint-xxl'
        );
      default:
        return '0';
    }
  }
}
