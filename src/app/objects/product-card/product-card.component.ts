import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/ProductsModel'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  ngOnInit() {
    console.log(this.CardData)
  }

  @Input() CardData!: Product;

  
}
