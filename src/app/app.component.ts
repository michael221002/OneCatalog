import { Component, OnInit } from '@angular/core';
import { ProductDataService } from './services/product-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }

  cardData = this.productDataService.getAllData()
  title = 'OneCatalog';

  constructor(private productDataService: ProductDataService){}


}
