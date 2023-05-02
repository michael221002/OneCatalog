import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  getmyVariableZahl():string {
    return this.dataService.Zahl.toString();
  }


  constructor(private dataService: DataService){
  }

  ngOnInit() {
  }
}
