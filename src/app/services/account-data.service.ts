import { Injectable } from '@angular/core';
import { Account } from '../models/AccountModel';
import Users from '../data/accounts.json';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {


  Accounts: Account[] = Users;

  getAllAccounts(){
    return this.Accounts
  }

  getSingleAccounts(employeID: number){
    for (let i of this.Accounts){
      if (employeID === i.employeID) {
        return i;
      }
    }
    return "Account not found";
  }

  constructor() { }
}
