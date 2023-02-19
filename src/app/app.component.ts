import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  decimalNumber = 0;
  binaryArray: number[] = [0, 0, 0, 0, 0, 0, 0, 0];

  decimalToBinary(): void {
    let binaryArray: number[] = [];
    let decimalNumber = this.decimalNumber;
    while (decimalNumber > 0) {
      let remainder = decimalNumber % 2;
      binaryArray.unshift(remainder);
      decimalNumber = Math.floor(decimalNumber / 2);
    }
    this.binaryArray = binaryArray.length > 0 ? binaryArray : [0];
  }

  binaryToDecimal(): void {
    let decimalNumber = 0;
    for (let i = this.binaryArray.length - 1; i >= 0; i--) {
      decimalNumber += this.binaryArray[i] * Math.pow(2, 7 - i);
    }
    this.decimalNumber = decimalNumber;
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
}
