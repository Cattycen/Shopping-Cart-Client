import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AddDataService {
  url = 'http://localhost:8088/api/addProduct';
  constructor(private http: Http) { }

  getProducts() {
    return this.http.get(this.url);
  }

  createProducts(titleText, priceText, imageUrlText, categoryText) {
    return this.http.post(this.url, {title: titleText, price: priceText, imageUrl: imageUrlText, category: categoryText});
  }

  deleteProducts(id) {
    return this.http.delete(this.url + '/' + id);
  }

}
