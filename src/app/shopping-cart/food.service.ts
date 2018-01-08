import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FoodService {
  Url = 'http://localhost:8088/api/addFood';
  constructor(private http: Http) {  }
  getProduct() {
    return this.http.get(this.Url);
  }

  updateProduct(proudct, purchasedQuantity, totalQuantity, totalMoney) {
    return this.http.post(this.Url, {
      title: proudct.title,
      price: proudct.price,
      quantity: purchasedQuantity,
      totalQuantity: totalQuantity,
      totalMoney: totalMoney
    });
  }
}
