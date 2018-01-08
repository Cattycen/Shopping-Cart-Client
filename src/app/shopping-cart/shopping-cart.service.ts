import { Injectable } from '@angular/core';
import { Product } from "../models/product";
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ShoppingCartService {
  // url = 'http://localhost:8088/api/addToCart';
  cart: any = {};

  constructor(private http: Http) {

  }

  private _addToCartSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  public addToCartEmitter: Observable<boolean> = this._addToCartSubject.asObservable();

  private _changeQuantitySubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  public changeQuantityEmitter: Observable<boolean> = this._changeQuantitySubject.asObservable();

  addToCart(ifAdd: boolean) {
    this._addToCartSubject.next(ifAdd);
  }

  changeQuantity (ifChange: boolean) {
    this._changeQuantitySubject.next(ifChange);
  }

  addProductToCart(proudct: object) {
    // console.log(proudct);
    this.cart[proudct['title']] = this.cart[proudct['title']] ? [proudct, this.cart[proudct['title']][1] + 1] : [proudct, 1];
    // console.log(this.cart)
  }

  minusProductFromCart(proudct: object) {
    this.cart[proudct['title']] = [proudct, this.cart[proudct['title']][1] - 1];
  }

  getCart() {
    return this.cart;
  }


}
