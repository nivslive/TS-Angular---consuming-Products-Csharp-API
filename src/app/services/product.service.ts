import { Injectable } from '@angular/core';
import Product from '../models/Product';
import { HttpClient } from '@angular/common/http';
import enviroment from 'src/env/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private url: string = "";
  private api_url: string = enviroment.api_url ?? "";
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.api_url}/${this.url}`);
  }
  // public getProducts(): Product[] {
  //   const product = new Product();
  //   product.id = 1;
  //   product.title = "Test";
  //   product.price = 2.20;
  //   product.quantify = 59;
  //   return [product];
  // }
}
