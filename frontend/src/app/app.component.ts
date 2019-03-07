import { Component } from '@angular/core';
import { CalculateService } from './client/api/calculate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arg1: number;
  arg2: number;
  result: number;

  constructor(private calculateService: CalculateService) {
  }

  add() {
    if (this.arg1 || this.arg2) {
      this.calculateService
        .add({arg1: this.arg1, arg2: this.arg2})
        .subscribe(data => this.result = data.result);
    }
  }
}
