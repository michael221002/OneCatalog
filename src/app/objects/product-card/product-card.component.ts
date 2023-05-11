import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/CardModel';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  ngOnInit() {
  }

  @Input() CardData!: Card;

  icon: string = 'add_circle_outline'

  add(){

    if (this.icon == 'add_circle_outline'){
      this.icon = 'check_circle'
    } else {
      this.icon = 'add_circle_outline'
    }
  }

  panelOpenState = false;
  
}
