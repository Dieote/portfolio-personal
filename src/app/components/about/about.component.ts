import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  @ViewChild('sectionRef', { static: false }) sectionRef!: ElementRef;

  ngAfterViewInit(): void {
    if (this.sectionRef) {
      this.sectionRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
