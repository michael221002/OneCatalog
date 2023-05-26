import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { ProductDataService } from 'src/app/services/product-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {
  product: any;
  productId: any;

  public requirementListForm: FormGroup = this._createForm();
  // erstellt eine Variable die die Liste mit den Requirements als FormGroup enthält

  private _createForm(): FormGroup {
    return this._formBuilder.group({
      requirementList: this._formBuilder.array([])
    })
  }

  constructor(
    private productDataService: ProductDataService,
    private activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder) {

  }

  ngOnInit():void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    // reads id of active route and assigns it to productId

    this.product = this.productDataService.getSingleProductDetail(this.productId);
    // gets product according to id

    const requirements = this.product.requirements as string[];
    // gets the requirements array and sets it to the temporary variable requirements

    const requirementControls = requirements.map((requirement: string) => {
      return this._formBuilder.control('');})
      // creates an array of FormControl instances using the map method: For each
      // requirement, a new FormControl is created with an empty Value ''

    this.requirementListForm.setControl('requirementList',
    this._formBuilder.array(requirementControls))
      // sets the requirementList form Control in the requirementListForm FormGroup
      // to an array of FormControl instances, the requirementControls from before
      // is passed as an argument to create the array for the formbuilder

    console.log(this.productId);
    console.log(requirements);

  }




  public isDisabled():boolean {
    return !(this.requirementListForm.valid &&
      (this.requirementListForm.touched || this.requirementListForm.dirty))
  }

  public get productRequirementList() {
    return this.requirementListForm.get('requirementList') as FormArray
  }
}
