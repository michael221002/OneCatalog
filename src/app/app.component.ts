import { Component, OnInit } from '@angular/core';
import { AccountDataService } from './services/account-data.service';
import { AppDataService } from './services/app-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.appData.addProduct(9);
  } 

  constructor(private accounts:AccountDataService, private appData:AppDataService) {}


}
