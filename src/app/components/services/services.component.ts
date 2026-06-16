import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  showModalTechSup = false;
  showModalWebDev = false;
  showModalQA = false;
  showModalRestaurant = false;

  openModalTechSup(): void {
    this.showModalTechSup = true;
  }

  closeModalTechSup(): void {
    this.showModalTechSup = false;
  }

  openModalWebDev(): void {
    this.showModalWebDev = true;
  }

  closeModalWebDev(): void {
    this.showModalWebDev = false;
  }

  openModalQA(): void {
    this.showModalQA = true;
  }

  closeModalQA(): void {
    this.showModalQA = false;
  }

  openModalRestaurant(): void {
    this.showModalRestaurant = true;
  }

  closeModalRestaurant(): void {
    this.showModalRestaurant = false;
  }
}
