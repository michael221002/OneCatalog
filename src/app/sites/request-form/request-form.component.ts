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
  requirementLabels: any;

  nestedForm!: FormGroup;
  // zweites Form mit Trennung nach Requirement Array und User data
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
    private formBuilder: FormBuilder) {

  }

  ngOnInit():void {
    this.nestedForm = this.formBuilder.group({
      name: 'default Value',
      employeeId: 'default Value',
      manager: 'default Value',
      department: 'default Value',
      costCenter: 'default Value'
    });
    this.nestedForm.valueChanges.subscribe(console.log);
    // baut ein form mit Userdaten und subscribed

    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    // reads id of active route and assigns it to productId

    this.product = this.productDataService.getSingleProductDetail(this.productId);
    // gets product according to id

    const requirements = this.product.requirements;
    // gets the requirements array of strings and sets it to the temporary variable requirements

    this.requirementLabels = this.product.requirements.map((requirement: string) => {
      const capitalizedRequirement = requirement.charAt(0).toUpperCase() + requirement.slice(1);
      return capitalizedRequirement.replace(/ID/g, ' ID')
    });
    // transforms the labels

    const requirementControls = requirements.map((requirement: string) => {
      return this.formBuilder.control('');})
      // creates an array of FormControl instances using the map method: For each
      // requirement, a new FormControl is created with an empty Value ''

    this.requirementListForm.setControl('requirementList',
    this.formBuilder.array(requirementControls))
      // fills the requirementList form Control in the requirementListForm FormGroup
      // with an array of FormControl instances, the requirementControls from before
      // is passed as an argument to create the array for the formbuilder


    console.log(requirements);
    console.log(requirementControls);
    console.log(this.requirementListForm);
    console.log(this.productRequirementList);
    console.log(this.requirementLabels)

  }




  public isDisabled():boolean {
    return !(this.requirementListForm.valid &&
      (this.requirementListForm.touched || this.requirementListForm.dirty))
  }

  public get productRequirementList() {
    return this.requirementListForm.get('requirementList') as FormArray
  }
}
