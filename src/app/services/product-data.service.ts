import { Injectable } from '@angular/core';
import { Card } from '../models/CardModel';
import { Products } from '../data/data'
import { Product } from '../models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  //Hier werden Funktion zur Datenverarbeiung definiert
  transformToCard(data: Product): Card {
    const { internalID,logo,standard,publisher,costs,price,timeperiod,productName,externalID,tags,category, edition } = data;
    return { internalID,logo,standard,publisher,costs,price,timeperiod,productName,externalID,tags,category, edition }
  }



  //hier werden die Daten aus der Daten Klasse(Data.ts) ausgelese und an die jeweilige Komponente zurück gegeben
  getAllProductsDetail() {
    //this function is useless for us at the moment
    return this.products.Products;
  }

  getAllProductsCard() {
    const cards: Card[] = this.products.Products.map(this.transformToCard);
    return cards;
  }

  getSingleProductDetail(id: number):Product | string{
    for (let i = 0; i < this.products.Products.length; i++) {
      if ( this.products.Products[i].internalID == id ) {
        return this.products.Products[i]
      }
    }

    return 'Product not found'
  }

  getSingleProductCard(id: number) {
    //this funtion is important fir filter and search
  }
  
  constructor(private products: Products) {
  }
}
