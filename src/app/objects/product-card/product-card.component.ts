import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/CardModel';
import { AppDataService } from 'src/app/services/app-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  ngOnInit() {
    this.disabled = this.appData.checkProduct(this.CardData.index);
    if (this.disabled == true) {
      this.icon = 'check';
      this.value = 'added';
    } else {
      this.icon = 'add_circle_outline';
      this.value = 'add';
    }
  }

  @Input() CardData!: Card;

  disabled:boolean=false;

  icon: string = 'add_circle_outline'
  value: string = 'add';

  add(){
    this.appData.addProduct(this.CardData.index);
    this.ngOnInit();

    this.snackBar.open('Product has been added', 'okay', {
      duration: 2000,
    });
  }

  panelOpenState = false;

  constructor(private appData: AppDataService, public snackBar: MatSnackBar) {}
  
}
