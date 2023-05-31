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
  account: any;
  reqUserData: string[] = ["name", "upn", "location", "employeeId", "reportsTo", "department", "costCenter"];

  nestedForm!: FormGroup; // wird das userForm und das requirementListForm aufnehmen
  userForm: FormGroup = this.formBuilder.group({ });
  // zweite FormGroup, die die Userdaten enthalten wird
  public requirementListForm: FormGroup = this.createForm();
  // erstellt eine Variable die eine FormGroup enthält

  private createForm(): FormGroup {
    return this.formBuilder.group({
      requirementList: this.formBuilder.array([])
    })
  }
  // füllt die FormGroup requirementListForm mit einem zunächst leeren Array
  // von FormControls, der FormControl Array wird requirementList genannt

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

    const requirements = this.product.requirements;
    // gets the requirements array of strings and sets it to the temporary variable requirements

    this.account = this.accountService.getSingleAccounts(123456);
    //gets the account

    
    // 2. build the nested Form
    this.nestedForm = this.formBuilder.group({
      userForm: this.userForm,
      productForm: this.requirementListForm,
      reason: this.formBuilder.control('', [Validators.required, Validators.minLength(50)])
    })




    for (const item of this.reqUserData) {
      this.userForm.addControl(
        item, this.formBuilder.control({value: this.account[item], disabled: true})
      )
    }
    // adds a form control for each item of the reqUserData-Array


    /*this.requirementLabels = this.product.requirements.map((requirement: string) => {
      const capitalizedRequirement = requirement.charAt(0).toUpperCase() + requirement.slice(1);
      return capitalizedRequirement.replace(/ID/g, ' ID')
    });
    // transforms the labels*/

    const requirementControls = requirements.map((requirement: string) => {
      const control = this.formBuilder.control(this.product[requirement]);
      control.disable();
      return control;
    })
    console.log(requirementControls)
      // creates an array of FormControl instances using the map method: For each
      // requirement, a new FormControl is created with an empty Value ''

    this.requirementListForm.setControl('requirementList',
    this.formBuilder.array(requirementControls));
      // fills the requirementList form Control in the requirementListForm FormGroup
      // with an array of FormControl instances, the requirementControls from before
      // is passed as an argument to create the array for the formbuilder


    /*for(let i = 0; i < requirements.length; i++) {
      this.requirementListForm.controls[i].setValue(this.product[requirements[i]]);
    }
*/
  }


  public isDisabled():boolean {
    return !(this.requirementListForm.valid &&
      (this.requirementListForm.touched || this.requirementListForm.dirty))
  }

  public get productRequirementList() {
    return this.requirementListForm.get('requirementList') as FormArray
  }
}
