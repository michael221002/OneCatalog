import { Injectable, OnInit } from '@angular/core';
import { Card } from '../models/CardModel';
import { Product } from '../models/ProductModel';
import { RequestForm } from '../models/RequestFormModel';
import Data from '../data/data.json';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  //Hier werden Funktion zur Datenverarbeiung definiert
  transformToCard(data: Product): Card {
    const { index,logo,standard,publisher,costs,price,timeperiod,name,tags,category, edition } = data;
    return { index,logo,standard,publisher,costs,price,timeperiod,name,tags,category, edition }
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

  getSingleProductCard(id: number) {
    //this funtion is important for filter and search
  }

  constructor() {
  }
}
