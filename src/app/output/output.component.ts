import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
  providers: [DataService]
})
export class OutputComponent implements OnInit {


  data?: number;

  constructor(private dataService: DataService){
  }

  ngOnInit() {
    this.data = this.dataService.Zahl;
  }
}
