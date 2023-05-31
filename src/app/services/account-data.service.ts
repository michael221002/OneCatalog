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

  getSingleAccounts(employeeId: number){
    for (let i of this.Accounts){
      if (employeeId === i.employeeId) {
        return i;
      }
    }
    return "Account not found";
  }

  constructor() { }
}
