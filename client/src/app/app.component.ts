import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

    this.http.get('http://192.168.202.100:8000/getIndex').subscribe(data => {
      this.addProduct.patchValue({
        index: data
      });
    });
  }
  title = 'client';

  tags: string[] = [];

  export:Product = {
    index: 0,
    businessReason: '',
    productName: '',
    publisher: '',
    version: '',
    edition: '',
    releaseDate: '',
    standard: false,
    costs: 0,
    price: 0,
    timeperiod: '',
    logo: '',
    requirements: '',
    location: '',
    linkToWebsite: '',
    externalID: 0,
    prereqireties: '',
    functionality: '',
    departement: '',
    role: '',
    category: '',
    tags: [],
    name: '',
    descripton: '',
    technicalOwner: '',
    businessOwner: '',
    contractOwner: '',
    OLA: '',
    appClassification: '',
    lifecycleState: '',
    SWOApproved: '',
    approvalType: '',
    internalID: 0,
    licenseModel: '',
    licenseLevel: ''
  };

  addTag(){
    this.tags.push(String(this.addProduct.value.tags));
    this.addProduct.patchValue({
      tags: '',
    });
  }

  onSubmit(){
    this.export.index = Number(this.addProduct.value.index);
    this.export.businessReason = String(this.addProduct.value.businessReason);
    this.export.productName = String(this.addProduct.value.productName);
    this.export.publisher = String(this.addProduct.value.publisher);
    this.export.version = String(this.addProduct.value.version);
    this.export.edition = String(this.addProduct.value.edition);
    this.export.releaseDate = String(this.addProduct.value.releaseDate);
    this.export.standard = Boolean(this.addProduct.value.standard);
    this.export.costs = Number(this.addProduct.value.costs);
    this.export.price = Number(this.addProduct.value.price);
    this.export.timeperiod = String(this.addProduct.value.timeperiod);
    this.export.logo = String(this.addProduct.value.logo);
    this.export.requirements = String(this.addProduct.value.requirements);
    this.export.location = String(this.addProduct.value.location);
    this.export.linkToWebsite = String(this.addProduct.value.linkToWebsite);
    this.export.externalID = Number(this.addProduct.value.externalID);
    this.export.prereqireties = String(this.addProduct.value.prereqireties);
    this.export.functionality = String(this.addProduct.value.functionality);
    this.export.departement = String(this.addProduct.value.departement);
    this.export.role = String(this.addProduct.value.role);
    this.export.category = String(this.addProduct.value.category);
    this.export.tags = this.tags;
    this.export.name = String(this.addProduct.value.name);
    this.export.descripton = String(this.addProduct.value.descripton);
    this.export.technicalOwner = String(this.addProduct.value.technicalOwner);
    this.export.businessOwner = String(this.addProduct.value.businessOwner);
    this.export.contractOwner = String(this.addProduct.value.contractOwner);
    this.export.OLA = String(this.addProduct.value.OLA);
    this.export.appClassification = String(this.addProduct.value.appClassification);
    this.export.lifecycleState = String(this.addProduct.value.lifecycleState);
    this.export.SWOApproved = String(this.addProduct.value.SWOApproved);
    this.export.approvalType = String(this.addProduct.value.approvalType);
    this.export.internalID = Number(this.addProduct.value.internalID);
    this.export.licenseModel = String(this.addProduct.value.licenseModel);
    this.export.licenseLevel = String(this.addProduct.value.licenseLevel);
    

    this.http.post('http://192.168.202.100:8000/addProduct', this.export || JSON).subscribe(res => {
      console.log(res);
    });

    this.ngOnInit();
  }

  addProduct = new FormGroup({
    index: new FormControl(),
    businessReason: new FormControl(''),
    productName: new FormControl(''),
    publisher: new FormControl(''),
    version: new FormControl(''),
    edition: new FormControl(''),
    releaseDate: new FormControl(''),
    standard: new FormControl(''),
    costs: new FormControl(''),
    price: new FormControl(''),
    timeperiod: new FormControl(''),
    logo: new FormControl(''),
    requirements: new FormControl(''),
    location: new FormControl(''),
    linkToWebsite: new FormControl(''),
    externalID: new FormControl(''),
    prereqireties: new FormControl(''),
    functionality: new FormControl(''),
    departement: new FormControl(''),
    role: new FormControl(''),
    category: new FormControl(''),
    tags: new FormControl(''),
    name: new FormControl(''),
    descripton: new FormControl(''),

    technicalOwner: new FormControl(''),
    businessOwner: new FormControl(''),
    contractOwner: new FormControl(''),
    OLA: new FormControl(''),
    appClassification: new FormControl(''),
    lifecycleState: new FormControl(''),
    SWOApproved: new FormControl(''),
    approvalType: new FormControl(''),
    internalID: new FormControl(''),
    licenseModel: new FormControl(''),
    licenseLevel: new FormControl('')
  });


  constructor(private http: HttpClient) { }
}
