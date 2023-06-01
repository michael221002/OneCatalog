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
    console.log(this.data);
  }

}
