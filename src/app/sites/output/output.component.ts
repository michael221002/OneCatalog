import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {


  constructor(private productDataService: ProductDataService){
    
  }

  data: any;
  ngOnInit() {
    this.data = this.productDataService.requestData

    const firstObject = this.data[0];

    for (const key in firstObject) {
      if (Object.prototype.hasOwnProperty.call(firstObject, key)) {
        const value = firstObject[key];
        this.userData.push([key, value]);
      }
    }

    for (let i of this.data[1]){
      for(let y of i){
      }
    }
  }

  userData: any[] = [];
  products: any[] = [];

}
