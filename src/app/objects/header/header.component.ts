import { Component, OnInit } from '@angular/core';
import { AccountDataService } from 'src/app/services/account-data.service';
import { Account } from '../../models/AccountModel';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private accountData: AccountDataService) {

  }
  ngOnInit() {
  }

  display: string = 'none';

  show(){
    this.display = 'flex';
  }

  close(){
    this.display = 'none';
  }

  account: Account = this.accountData.getSingleAccounts(123456);
}
