import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {


  /*
   @param productDataService productForm
: 
externalID
: 
66666
internalID
: 
666666
productName
: 
"Miro"
[[Prototype]]
: 
Object
reason
: 
"Lorem ipsum dolor sfit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem"
userForm
: 
costCenter
: 
"14.61, Academy"
department
: 
"BIT"
employeeId
: 
123456
location
: 
"Leipzig, Germany"
name
: 
"Mustermann, Max"
reportsTo
: 
"Mustermann, Chef"
upn
: 
"max.mustermann@softwareone.com"
   */


  constructor(private productDataService: ProductDataService){
    
  }

  data: any;
  ngOnInit() {
    this.data = this.productDataService.requestData
    console.log(this.data);
  }

}
