import { Injectable, OnInit } from '@angular/core';
import { Card } from '../models/CardModel';
import { Product } from '../models/ProductModel';
import { Basket } from '../models/BasketModel';
import { RequestForm } from '../models/RequestFormModel';
import Data from '../data/data.json';
import { NonNullAssert } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  //Hier werden Funktion zur Datenverarbeiung definiert
  transformToCard(data: Product): Card {
    const { index,logo,standard,publisher,costs,price,timeperiod,name,tags,category, edition } = data;
    return { index,logo,standard,publisher,costs,price,timeperiod,name,tags,category, edition }
  }

  transformToBasket(data: Product): Basket {
    const {index, logo, publisher, productName } = data;
    return {index, logo, publisher, productName}
  }

  products: Product[] = Data;

  //hier werden die Daten aus der Daten Klasse(Data.ts) ausgelese und an die jeweilige Komponente zurück gegeben
  getAllProductsDetail() {
    //this function is useless for us at the moment
    return this.products;
  }

  getAllProductsCard() {
    const cards: Card[] = this.products.map(this.transformToCard);
    return cards;
  }

  getSingleProductDetail(id: number):Product | string{
    for (let i = 0; i < this.products.length; i++) {
      if ( this.products[i].index == id ) {
        return this.products[i]
      }
    }

    return 'Product not found'
  }


  // get multiple Products by ID
  getMultipleProducts(ids: number[]): any[] {
    const productArr: any[] = [];
    for (let id of ids) {
      productArr.push(this.getSingleProductDetail(id));
    }
    return productArr;
  }

  getSingleProductCard(id: number) {
    //this funtion is important for filter and search
  }

  getSingleProductBasket(index: number):Basket {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].index === index){
        const basket: Basket = this.transformToBasket(this.products[i]);
        return basket
      }
    }

    return new Basket(-1, 'product not found', 'product not found', 'product not found')
  }

  requestData: any = {}

  sendRequest(data: any){
    this.requestData = data;
  }

  constructor() {
  }
}
