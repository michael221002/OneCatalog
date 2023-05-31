import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { ProductDataService } from 'src/app/services/product-data.service';
import { ActivatedRoute } from '@angular/router';
import { AccountDataService } from 'src/app/services/account-data.service';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {
  product: any;
  productId: any;
  requirementLabels: any;
  userLabels: any;
  account: any;
  reqUserData: string[] = ["name", "upn", "location", "employeeId", "reportsTo", "department", "costCenter"];
  requirements: string[] = [];

  nestedForm!: FormGroup; // wird das userForm und das requirementListForm aufnehmen
  userForm: FormGroup = this.formBuilder.group({ });
  // zweite FormGroup, die die Userdaten enthalten wird
  productForm: FormGroup = this.formBuilder.group({ });
  // erstellt eine Variable die eine FormGroup enthält

  constructor(
    private productDataService: ProductDataService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder, private accountService: AccountDataService) {

  }

  ngOnInit():void {
    // 1. Get the account data, product and the requirement data
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    // reads id of active route and assigns it to productId

    this.product = this.productDataService.getSingleProductDetail(this.productId);
    // gets product according to id

    this.requirements = this.product.requirements;
    // gets the requirements array of strings and sets it to the temporary variable requirements

    console.log(this.requirements)
    this.account = this.accountService.getSingleAccounts(123456);
    //gets the account


    // 2. build the nested Form
    this.nestedForm = this.formBuilder.group({
      userForm: this.userForm,
      productForm: this.productForm,
      reason: this.formBuilder.control('', [Validators.required, Validators.minLength(50)])
    })




    for (const item of this.reqUserData) {
      this.userForm.addControl(
        item, this.formBuilder.control({value: this.account[item], disabled: true})
      )
    }
    // adds a form control for each item of the reqUserData-Array

    for(const item of this.requirements) {
      this.productForm.addControl(
        item, this.formBuilder.control({value: this.product[item], disabled: true})
      )
    }
    console.log(this.requirements)

    this.userLabels = this.reqUserData.map((requirement: string) => {
      const capitalizedRequirement = requirement.charAt(0).toUpperCase() + requirement.slice(1);

      return capitalizedRequirement.replace(/To/g, ' To').replace(/Id/g, ' ID').replace(/Center/g, ' Center');
    });

    this.requirementLabels = this.product.requirements.map((requirement: string) => {
      const capitalizedRequirement = requirement.charAt(0).toUpperCase() + requirement.slice(1);
      return capitalizedRequirement.replace(/ID/g, ' ID').replace(/Name/g, ' Name')
    });
    // transforms the labels
  }


  public isDisabled():boolean {
    return !(this.nestedForm.valid &&
      (this.nestedForm.touched || this.nestedForm.dirty))
  }

}
