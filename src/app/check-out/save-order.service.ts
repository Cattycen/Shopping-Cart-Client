import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SaveOrderService {
  url = 'http://localhost:8088/api/addOrder';
  constructor(private http: Http) { }

  createOrder(nameText, addressLine1Text, addressLine2Text, cityText){
    return this.http.post(this.url, {name: nameText, addressLine1: addressLine1Text, addressLine2: addressLine2Text, city: cityText});
  }

  getOrder(){
    return this.http.get(this.url);
  }


}
