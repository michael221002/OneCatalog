import { Injectable } from '@angular/core';
import { Card } from '../models/CardModel';
import { map } from 'rxjs/operators';

import { Products } from '../data/data'

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  getAllData(){
    //normalerweise hier request
    return this.products.Products
  }

  getSingleData(key:number){
    return this.products.Products[key]
  }
  
  constructor(private products: Products) { 
    //let ref = card; 
    //for (let i in products.Products) {
    //  for (let j in ref) {
    //    for (let k in products.Products[i]) {
    //      if (products.Products[i][k] == ref[j]){
    //        ref[j] = products.Products[i][k];
    //      }
    //    }
    //  }
    //  this.data.push(ref);
    //}


  }
}
