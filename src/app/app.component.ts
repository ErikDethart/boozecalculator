import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  flOzPerContainer: number = 12;
  alcoholPercentage: number = 4;
  containersPerSaleUnit: number = 12;
  costPerSaleUnit: number = 16.69;
  value: number = 10.2;
  containerUnit: string = "floz";

  //automatically update value field when any form value changes


  update() {
    this.value = 0.01 * this.flOzPerContainer * this.alcoholPercentage * this.containersPerSaleUnit / this.costPerSaleUnit;
    if (this.containerUnit == "floz") {
      this.value *= 29.5735;
    }
    this.value = Math.round(this.value * 10) / 10;
  }
  
}

