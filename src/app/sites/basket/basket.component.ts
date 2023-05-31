import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/services/app-data.service';
import { ProductDataService } from 'src/app/services/product-data.service';
import { Basket } from '../../models/BasketModel';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {


  basket = this.appData.basket;
  data:Basket[] = [];

  constructor(private appData: AppDataService, private productData: ProductDataService){}
  ngOnInit() {
    for (let i of this.basket) {
      this.data.push(this.productData.getSingleProductBasket(Number(i)));
    }
  }

  submit(){
    console.log(this.data);
  }

  delete(index:number){
    const indexToDelete = this.data.findIndex(obj => obj.index === index);
    this.data.splice(indexToDelete, 1);

    this.appData.deleteProduct(index);
  }


}
