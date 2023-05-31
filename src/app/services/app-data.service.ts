import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  //Data for Basket
  basket: number[] = [];
  addProduct(newProduct: number) {
    if (!this.basket.includes(newProduct)){
      this.basket.push(newProduct);
    }
  }

  checkProduct(product: number) {
    if (!this.basket.includes(product)){
      return false;
    } else {
      return true;
    }
  }

  deleteProduct(index: number){
    const indexToDelete = this.basket.findIndex(ind => ind === index);
    this.basket.splice(indexToDelete, 1);
  }

  constructor() { }
}
