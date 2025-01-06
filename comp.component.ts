import { Component, Input } from '@angular/core';
import { Driver } from '../drivers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp',
  imports: [CommonModule],
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent {
  @Input()
  vozac: Driver | undefined;

  @Input()
  indeks: number = 0; // Default value if not provided

  klasi() {
    return {
      'begin': this.vozac?.category === 'ASD',
      'adv': this.vozac?.category === 'EXPERT',
      'undr': true
    };
  }

  stilovi() {
    return 'underline';
  }

  onDrvView() {
    let link: string | undefined;
    if (this.vozac?.iconUrl) {
      link = this.vozac?.iconUrl;
    } else {
      link = "https://www.google.com";
    }
    window.open(link, "_blank");
  }
}
