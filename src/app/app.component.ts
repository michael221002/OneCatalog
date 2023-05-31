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
    console.log(this.accounts.getSingleAccounts(123456))
    //this.appData.addProduct(5) //for testing
  } 

  constructor(private accounts:AccountDataService, private appData:AppDataService) {}


}
