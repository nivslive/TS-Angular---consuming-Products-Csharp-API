import { Component } from '@angular/core';
import Product from './models/Product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
  products: Product[] = [];
  constructor(private productService: ProductService) {

  }

  ngOnInit() : void {
    // this.products = this.productService.getProducts();
    this.productService
      .getProducts()
      .subscribe((result: Product[]) => this.products = result);
  }

  createNewProduct() {

  }

  editProduct() {
    
  }
}
