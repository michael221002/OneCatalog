import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/services/app-data.service';
import { ProductDataService } from 'src/app/services/product-data.service';
import { AccountDataService } from 'src/app/services/account-data.service';
import { Account } from 'src/app/models/AccountModel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';


class ReqProduct{
  productName: string;
  internalID: number;
  externalID: number;

  constructor(productName: string, internalID: number, externalID: number){
    this.productName = productName;
    this.internalID = internalID;
    this.externalID = externalID;
  }
}

@Component({
  selector: 'app-dynamic-rec',
  templateUrl: './dynamic-rec.component.html',
  styleUrls: ['./dynamic-rec.component.scss']
})

export class DynamicRecComponent implements OnInit {
  ngOnInit() {
    //set Account
    this.Account = this.accountData.getSingleAccounts(123456);

    //set Products
    var product: ReqProduct;
    for (let index of this.appData.basket){
      product = new ReqProduct(
        this.productData.getSingleProductParam(index, 'productName'),
        this.productData.getSingleProductParam(index, 'internalID'),
        this.productData.getSingleProductParam(index, 'externalID')
      );

      this.Products.push(product);
    }

    console.log(this.Products);

    //set Requirements
    var req: string[];
    for (let index of this.appData.basket){
      req =  this.productData.getSingleProductParam(index, 'requirements')
      for (let requirement of req){
        if (!this.requirements.includes(requirement)){
          this.requirements.push(requirement);
        }
      }
    }

    console.log(this.requirements)
    for (let req of this.requirements){
      this.requestForm.addControl(req, this.fb.control({value: this.Account[req], disabled: true}));
    }
  }

  requirements: string[] = [];
  Products: ReqProduct[] = [];
  Account!: Account; 

  requestForm = new FormGroup({});

  constructor(private appData: AppDataService, private productData: ProductDataService, private accountData: AccountDataService, private fb: FormBuilder){}

  send(){
    console.log("lol");
  }

}
