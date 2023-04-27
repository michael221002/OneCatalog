import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  data!: number;

  constructor(private dataService: DataService){
    this.data = dataService.getZahl()
  }
}
