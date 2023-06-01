import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/ProductModel';
import { AppDataService } from 'src/app/services/app-data.service';
import { ProductDataService } from 'src/app/services/product-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [ProductDataService]
})
export class DetailsComponent implements OnInit {
  product: any;
  productId: any;
  products!: Product[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productDataService: ProductDataService,
    private appData: AppDataService,
    public snackBar: MatSnackBar) {

  }

  disabled:boolean=false;

  icon: string = 'add_circle_outline'
  value: string = 'add';

  add(){
    this.appData.addProduct(this.product.index);
    this.disabled = this.appData.checkProduct(this.product.index)
    this.ngOnInit();

    this.snackBar.open('Product has been added', 'okay', {
      duration: 2000,
    });
  }

  ngOnInit(): void {

    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    // reads the parameter given with the route
    this.products = this.productDataService.getAllProductsDetail();
    // gets all product Data
    //this.product = this.products.find(c => c.index == this.productId);
    this.product = this.productDataService.getSingleProductDetail(this.productId)
    // assigns product the value of the object in the array with the index of productId
    // doesn't handle the case if product isn't found!


    /*const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.productId = parseInt(id);
    }

    if(this.productId) {
      const product = this.productDataService.getSingleProductDetail(this.productId);
      if(product instanceof Product) {
        this.product = product
      }
    }
    console.log(this.productId);
    console.log(this.products);
*/


    this.disabled = this.appData.checkProduct(this.product.index);
    if (this.disabled == true) {
      this.icon = 'check';
      this.value = 'added';
    } else {
      this.icon = 'add_circle_outline';
      this.value = 'add';
    }
  }
}
