import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/services/app-data.service';
import { ProductDataService } from 'src/app/services/product-data.service';
import { Basket } from '../../models/BasketModel';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {


  basket = this.appData.basket;
  data:Basket[] = [];
  disabled:boolean = false;

  constructor(private appData: AppDataService, private productData: ProductDataService, public snackBar: MatSnackBar){}
  ngOnInit() {
    for (let i of this.basket) {
      this.data.push(this.productData.getSingleProductBasket(Number(i)));
    }

    if(this.basket.length == 0) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }


  delete(index:number){
    const indexToDelete = this.data.findIndex(obj => obj.index === index);
    this.data.splice(indexToDelete, 1);

    this.appData.deleteProduct(index);

    if(this.basket.length == 0) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }

    this.snackBar.open('Product has been delete', 'okay', {
      duration: 2000,
    });
  }


}
