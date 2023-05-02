import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  plusOne() {
    this.testService.plusOne();
  }

  minusOne() {
    this.testService.Zahl -= 1;
  }


  constructor(private testService: DataService){
  }
}
