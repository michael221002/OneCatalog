import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/CardModel';
import { AppDataService } from 'src/app/services/app-data.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  ngOnInit() {
    this.disabled = this.appData.checkProduct(this.CardData.index)
  }

  @Input() CardData!: Card;

  disabled:boolean=false;

  icon: string = 'add_circle_outline'

  add(){
    this.appData.addProduct(this.CardData.index);
    this.disabled = this.appData.checkProduct(this.CardData.index)
  }

  panelOpenState = false;

  constructor(private appData: AppDataService) {}
  
}
