import { Component, Input } from '@angular/core';
import Product from 'src/app/models/Product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  @Input() product?: Product;

  constructor() {

  }
  
  updateQuantifyData(quantify: number) {}
  updatePriceData(price: number) {}
  updateTitleData(title: string) {}
}
