import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    this.addProduct.patchValue({
      technicalOwner: 'Max Mustermann',
      businessOwner: 'Max Mustermann',
      contractOwner: 'Max Mustermann'
    });
  }
  title = 'client';

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
    requirements: [],
    location: '',
    linkToWebsite: '',
    externalID: 0,
    prereqireties: [],
    functionality: '',
    departement: [],
    role: [],
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


  tags: string[] = [];
  addTag(){
    this.tags.push(String(this.addProduct.value.tags));
    this.addProduct.patchValue({
      tags: '',
    });
  }

  Req: string[] = [];
  addReq(){
    this.Req.push(String(this.addProduct.value.requirements));
    this.addProduct.patchValue({
      requirements: '',
    });
  }

  PreReq: string[] = [];
  addPreReq(){
    this.PreReq.push(String(this.addProduct.value.prereqireties));
    this.addProduct.patchValue({
      prereqireties: '',
    });
  }

  Departement: string[] = [];
  addDepartement(){
    this.Departement.push(String(this.addProduct.value.departement));
    this.addProduct.patchValue({
      departement: '',
    });
  }

  Role: string[] = [];
  addRole(){
    this.Role.push(String(this.addProduct.value.role));
    this.addProduct.patchValue({
      role: '',
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
    this.export.requirements = this.Req;    // TODO
    this.export.location = String(this.addProduct.value.location);
    this.export.linkToWebsite = String(this.addProduct.value.linkToWebsite);
    this.export.externalID = Number(this.addProduct.value.externalID);
    this.export.prereqireties = this.PreReq;    // TODO
    this.export.functionality = String(this.addProduct.value.functionality);
    this.export.departement = this.Departement;    // TODO
    this.export.role = this.Role;    // TODO
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

      if (res == '"succesfull"') {
        this.state = true;
        this.message = "succesfull";
        console.log(this.message);
        setTimeout(() => {
          this.state = false;
        },  2000);
        this.addProduct.reset();
      }
      else {
        this.state = true;
        this.message = "Product already exists";

        setTimeout(() => {
          this.state = false;
        },  2000);
      }
    });

    this.ngOnInit();
  }

  message: string = '';
  state: boolean = false;

  addProduct = new FormGroup({
    index: new FormControl(),
    businessReason: new FormControl('', Validators.required),
    productName: new FormControl('', Validators.required),
    publisher: new FormControl('',Validators.required),
    version: new FormControl('',Validators.required),
    edition: new FormControl('',Validators.required),
    releaseDate: new FormControl('',Validators.required),
    standard: new FormControl('',Validators.required),
    costs: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    timeperiod: new FormControl('',Validators.required),
    logo: new FormControl('',Validators.required),
    requirements: new FormControl(''),
    location: new FormControl('',Validators.required),
    linkToWebsite: new FormControl('',Validators.required),
    externalID: new FormControl('',Validators.required),
    prereqireties: new FormControl(''),
    functionality: new FormControl('',Validators.required),
    departement: new FormControl(''),
    role: new FormControl(''),
    category: new FormControl('',Validators.required),
    tags: new FormControl(''),
    name: new FormControl('',Validators.required),
    descripton: new FormControl('',Validators.required),

    technicalOwner: new FormControl('',Validators.required),
    businessOwner: new FormControl('',Validators.required),
    contractOwner: new FormControl('',Validators.required),
    OLA: new FormControl('',Validators.required),
    appClassification: new FormControl('',Validators.required),
    lifecycleState: new FormControl('',Validators.required),
    SWOApproved: new FormControl('',Validators.required),
    approvalType: new FormControl('',Validators.required),
    internalID: new FormControl('',Validators.required),
    licenseModel: new FormControl('',Validators.required),
    licenseLevel: new FormControl('',Validators.required)
  });


  constructor(private http: HttpClient) { }
}
