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

  getCardData(){
    return this.productDataService.searchProduct(this.searchText)
  }

  //testing functions
  detailedData = this.productDataService.getAllProductsDetail()
  singleProduct = this.productDataService.getSingleProductDetail(1)

  searchText: string = '';

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
  }

  constructor(private productDataService: ProductDataService){}
  ngOnInit() {
  }
}
