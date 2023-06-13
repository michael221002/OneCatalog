import { Injectable, OnInit } from '@angular/core';
import { Card } from '../models/CardModel';
import { Product } from '../models/ProductModel';
import { Basket } from '../models/BasketModel'; 
import { RequestForm } from '../models/RequestFormModel';
import Data from '../data/data.json';
import { NonNullAssert } from '@angular/compiler';

interface Hits {
  index: number;
  Number: number;
}

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

  getSingleProductCard(id: number):Card | string {
    for (let i = 0; i < this.products.length; i++) {
      if ( this.products[i].index == id ) {
        const card: Card = this.transformToCard(this.products[i]);
        return card
      }
    }

    return 'Product not found'
  }

  chechProductIn(product: Product, all: Card[]): boolean{
    for (let i of all){
      if (i.index == product.index){
        return false
      }
    }
    return true
  }

  searchProduct(value: string){
    let all = this.getAllProductsDetail()
    let filteredCatalog: Card[] = [];

    let hits: Hits[] = [];

    let ValueArray: string[] = value.trim().toLowerCase().split(" ");


    console.log(ValueArray)
 
    for (let searchValue of ValueArray){
      if (searchValue == '') {
        for (let i of all){
          filteredCatalog.push(this.transformToCard(i))
        }
        return filteredCatalog;
      } else {
  
        for (let product of all) {
          //search for name
          if (product.name.toLowerCase().includes(searchValue.toLowerCase())){
            if (this.chechProductIn(product, filteredCatalog)){
              filteredCatalog.push(this.transformToCard(product));
              hits.push({index: product.index, Number: 1});
            } else {
              for (let appIndex = 0; appIndex < hits.length; appIndex++){
                if (hits[appIndex].index == product.index){
                  hits[appIndex].Number += 1;
                }
              }
            }
          }

          //search for edition
          if (product.edition.toLowerCase().includes(searchValue.toLowerCase())){
            if (this.chechProductIn(product, filteredCatalog)){
              filteredCatalog.push(this.transformToCard(product));
              hits.push({index: product.index, Number: 1});
            } else {
              for (let appIndex = 0; appIndex < hits.length; appIndex++){
                if (hits[appIndex].index == product.index){
                  hits[appIndex].Number += 1;
                }
              }
            }
          }
          //search for departement
          for (let departement of product.departement){
            if (departement.toLowerCase().includes(searchValue.toLowerCase())){
              if (this.chechProductIn(product, filteredCatalog)){
                filteredCatalog.push(this.transformToCard(product));
                hits.push({index: product.index, Number: 1});
              } else {
                for (let appIndex = 0; appIndex < hits.length; appIndex++){
                  if (hits[appIndex].index == product.index){
                    hits[appIndex].Number += 1;
                  }
                }
              }
            }
          }
  
          //search for functionality
          if (product.functionality.toLowerCase().includes(searchValue.toLowerCase())){
            if (this.chechProductIn(product, filteredCatalog)){
              filteredCatalog.push(this.transformToCard(product));
              hits.push({index: product.index, Number: 1});
            } else {
              for (let appIndex = 0; appIndex < hits.length; appIndex++){
                if (hits[appIndex].index == product.index){
                  hits[appIndex].Number += 1;
                }
              }
            }
          }
  
          //search for tags
          for (let tags of product.tags){
            if (tags.toLowerCase().includes(searchValue.toLowerCase())){
              if (this.chechProductIn(product, filteredCatalog)){
                filteredCatalog.push(this.transformToCard(product));
                hits.push({index: product.index, Number: 1});
              } else {
                for (let appIndex = 0; appIndex < hits.length; appIndex++){
                  if (hits[appIndex].index == product.index){
                    hits[appIndex].Number += 1;
                  }
                }
              }
            }
          }
  
          //standard
          if (searchValue.toLowerCase() == "standard"){
            if (product.standard){
              if (this.chechProductIn(product, filteredCatalog)){
                filteredCatalog.push(this.transformToCard(product));
                hits.push({index: product.index, Number: 1});
              } else {
                for (let appIndex = 0; appIndex < hits.length; appIndex++){
                  if (hits[appIndex].index == product.index){
                    hits[appIndex].Number += 1;
                  }
                }
              }
            }
          }
  
          //publisher
          if (product.publisher.toLowerCase().includes(searchValue.toLowerCase())){
            if (this.chechProductIn(product, filteredCatalog)){
              filteredCatalog.push(this.transformToCard(product));
              hits.push({index: product.index, Number: 1});
            } else {
              for (let appIndex = 0; appIndex < hits.length; appIndex++){
                if (hits[appIndex].index == product.index){
                  hits[appIndex].Number += 1;
                }
              }
            }
          }
  
          //category
          if (product.category.toLowerCase().includes(searchValue.toLowerCase())){
            if (this.chechProductIn(product, filteredCatalog)){
              filteredCatalog.push(this.transformToCard(product));
              hits.push({index: product.index, Number: 1});
            } else {
              for (let appIndex = 0; appIndex < hits.length; appIndex++){
                if (hits[appIndex].index == product.index){
                  hits[appIndex].Number += 1;
                }
              }
            }
          }
  
          //search in description
          const words = product.descripton.toLowerCase().split(" ");
          for (let world of words ){
            if (world.includes(searchValue.toLowerCase())){
              if (this.chechProductIn(product, filteredCatalog)){
                filteredCatalog.push(this.transformToCard(product))
              }
            }
          }
  
        }
      }
    }

    if (this.products.length > 0) {

      //sortiere hits von meisten bis kleinsten hits

      const catalogWithHits = filteredCatalog.map((product) => {
        const hit = hits.find((hit) => hit.index === product.index);
        return {
          product,
          hit: hit ? hit.Number : 0,
        };
      });

      catalogWithHits.sort((a, b) => b.hit - a.hit);

      filteredCatalog = catalogWithHits.map((item) => item.product);

      return filteredCatalog;
    } else {
      return [new Card(
        -1, 
        'not found', 
        false, 
        'not found',
        0,
        0,
        'not found',
        'not found',
        ['not found'],
        'not found',
        'not found',
      )]
    }
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

  getSingleProductParam(index: number, param: string): any{
    let product = this.products[index];
    let res = product[param];
    return res
  }

  constructor() {
  }
}
