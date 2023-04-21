import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  cardData = this.productDataService.getAllProductsCard()
  title = 'OneCatalog';

  //to test functions in service
  testDetailProduct = this.productDataService.getSingleProductDetail(1234)
  testCardProducts = this.productDataService.getAllProductsCard()
  testDetailProducts = this.productDataService.getAllProductsDetail()


  constructor(private productDataService: ProductDataService){}
  ngOnInit() {
    console.log(this.testDetailProduct)
    console.log(this.testCardProducts)
    console.log(this.testDetailProducts)
  }
}
