import { Injectable } from '@angular/core';
import { Card } from '../models/CardModel';

import { Products } from '../data/data'

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  data?: Card[];

  getAllProducts<Card>(){
    //normalerweise hier request
    this.data = this.products.Products;

    return this.data;
  }
  constructor(private products: Products) { }
}
