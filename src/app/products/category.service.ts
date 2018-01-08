import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class CategoryService {
  url = 'http://localhost:8088/api/addCategory';
  categories= ['Bread', 'Dairy', 'Fruits', 'Seasonings and Spices', 'Vegetables'];

  constructor(private http: Http) { }

  getCategory() {
    return this.http.get(this.url);
  }
}
