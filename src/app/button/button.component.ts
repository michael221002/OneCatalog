import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  data!: number;

  plusOne(){
    this.dataService.setZahl(1)
  }

  menusOne(){
    this.dataService.setZahl(1)
  }

  constructor(private dataService: DataService){
    
  }
}
