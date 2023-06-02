import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { ProductDataService } from 'src/app/services/product-data.service';
import { AccountDataService } from 'src/app/services/account-data.service';
import { AppDataService } from 'src/app/services/app-data.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/ProductModel';


@Component({
  selector: 'app-basket-request',
  templateUrl: './basket-request.component.html',
  styleUrls: ['./basket-request.component.scss']
})
export class BasketRequestComponent {
  productArr: any[] = [];
  productIdArr: number[] = [];
  account: any;
  reqUserData: string[] = ["name", "upn", "location", "employeeId", "reportsTo", "department", "costCenter"];
  requirements: string[] = [];

  basketRequestForm: FormGroup;

  constructor(
    private productDataService: ProductDataService,
    private appDataService: AppDataService,
    private formBuilder: FormBuilder, private accountService: AccountDataService,
    private router: Router) {
      this.basketRequestForm = this.formBuilder.group({
        products: this.formBuilder.array([])
      })
  }

  ngOnInit(): void {
    this.account = this.accountService.getSingleAccounts(123456);
    this.productIdArr = [3, 6]//this.appDataService.basket;
    this.productArr = this.productDataService.getMultipleProducts(this.productIdArr);
    this.initializeBasketForm();
    console.log(this.getBasketControls('products.0.requirements'))


  }

  initializeBasketForm() {
    const productGroups = this.productArr.map((product: Product) => {
      const requirementGroup = new FormGroup({});
      product.requirements.forEach((requirement) => {
        requirementGroup.addControl(requirement,
          this.formBuilder.control({
            value: product[requirement], disabled: true
          }) );
      });
      return this.formBuilder.group({
        requirements: requirementGroup
      });
    });

    this.basketRequestForm.setControl('products',
      this.formBuilder.array(productGroups));
  console.log(this.basketRequestForm);
    }

    getBasketControls(controlName: string) {
      return (this.basketRequestForm.get(controlName) as FormArray).controls;
    }
    send(){

      for (let item in this.basketRequestForm.controls){
        this.basketRequestForm.controls[item].enable();
      }

      this.productDataService.sendRequest(this.basketRequestForm.value);
      this.router.navigate(['../../output']);
    }
}
