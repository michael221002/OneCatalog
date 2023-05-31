import { Component, OnInit } from '@angular/core';
import { AccountDataService } from './services/account-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.accounts.getSingleAccounts(123456))
  } 

  constructor(private accounts:AccountDataService) {}


}
