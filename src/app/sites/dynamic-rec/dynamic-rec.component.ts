import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/services/app-data.service';
import { ProductDataService } from 'src/app/services/product-data.service';
import { AccountDataService } from 'src/app/services/account-data.service';
import { Account } from 'src/app/models/AccountModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


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
  displayedColumns: string[] = ['position', 'name', 'externalID'];
  ngOnInit() {
    //set Account
    this.Account = this.accountData.getSingleAccounts(123456);

    //set Products
    for (let index of this.appData.basket){
      this.Products.push( new ReqProduct(
        this.productData.getSingleProductParam(index, 'productName'),
        this.productData.getSingleProductParam(index, 'internalID'),
        this.productData.getSingleProductParam(index, 'externalID')
      ));
    }


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

    for (let req of this.requirements){
      this.requestForm.addControl(req, this.fb.control(
        { value: this.Account[req], disabled: true }
      ));
    }
    this.requestForm.addControl("reason", this.fb.control( this.placeHolder ,
    [Validators.required, Validators.minLength(50)]
    ));
  }

  placeHolder: string = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."

  //build nice labels
  cleanLabel(label: string): string {
    let requirements: string[] = [
      "upn",
      "mail",
      "name",
      "employeeId",
      "role",
      "department",
      "reportsTo",
      "costCenter",
      "location"
    ];
  
    let cleanRequirements: string[] = [
      "upn",
      "E-Mail",
      "Name",
      "Employee Id",
      "Role",
      "Department",
      "Reports to",
      "Costcenter",
      "Location"
    ];
  
    for (let i in requirements) {
      if (requirements[i] === label) {
        return cleanRequirements[i];
      }
    }
  
    return label;
  }
  

  requirements: string[] = [];
  Products: ReqProduct[] = [];
  Account!: Account; 

  requestForm = new FormGroup({});

  constructor(private appData: AppDataService, private productData: ProductDataService, private accountData: AccountDataService, private fb: FormBuilder, private router: Router){}

  send(){
    //for (let item in this.nestedForm.controls){
    //  this.nestedForm.controls[item].enable();
    //}
    //
    //this.productDataService.sendRequest(this.nestedForm.value);
    //this.router.navigate(['../../output']);

    for (let req of this.requirements){
      this.requestForm.get(req)?.enable();
    }

    let all = [];

    all.push(this.requestForm.value)
    all.push(this.Products)

    this.productData.sendRequest(all);
    this.router.navigate(['../../output']);


    for (let req of this.requirements){
      this.requestForm.get(req)?.disable();
    }
  }

}
