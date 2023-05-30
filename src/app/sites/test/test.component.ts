import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: []
})
export class TestComponent implements OnInit {
  cardData = this.productDataService.getAllProductsCard()
  title = 'OneCatalog';


  //testing functions
  detailedData = this.productDataService.getAllProductsDetail()
  singleProduct = this.productDataService.getSingleProductDetail(1)



  constructor(private productDataService: ProductDataService){}
  ngOnInit() {
    console.log(this.cardData)
    console.log(this.detailedData)
    console.log(this.singleProduct)
  }
}
