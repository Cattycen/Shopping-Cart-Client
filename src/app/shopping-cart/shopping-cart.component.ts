import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/forkJoin';
import {Observable} from 'rxjs/Observable';
import { Router } from "@angular/router";
import {ShoppingCartService} from "../shopping-cart/shopping-cart.service";
import {FoodService} from "../shopping-cart/food.service";
import {Product} from "../models/product";
import {AddDataService} from "../admin/product-form/add-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart: any = null;
  totalMoney: number = 0;
  totalItem: number = 0;

  products: Product[] = [];
  filteredProducts: Product[] = [];
  subProduct: Product[] = [];
  category: string;

  constructor(private cartService: ShoppingCartService,
              private foodService: FoodService,
              private router: Router,
              private service: AddDataService,
              private route: ActivatedRoute) {
    this.service.getProducts()
      .subscribe(products => {
        // console.log(products.json());
        this.products = products.json();
        route.queryParamMap.subscribe(params => {
          this.category = params.get('category');
          this.filteredProducts = (this.category) ?
            this.products.filter(p => p.category === this.category) :
            this.products;
          this.subProduct = this.filteredProducts.slice(0, 3);;
        });
      });


    this.cartService.addToCartEmitter.subscribe(mode => {
      if (mode !== null) {
        this.totalMoney = 0;
        this.totalItem = 0;
        // console.log(typeof(this.cartService.getCart()))
        let tmpObj = this.cartService.getCart();
        this.cart = Object.keys(tmpObj).reduce((a, b) => {
          a = [...a, tmpObj[b]]

          this.totalItem += tmpObj[b][1];
          // console.log(this.totalItem);
          this.totalMoney += tmpObj[b][0]['price'] * tmpObj[b][1];
          return a;
        }, []);
        // console.log(this.cart);
      }
    });

    this.cartService.changeQuantityEmitter.subscribe(mode => {
      if (mode != null) {
        this.totalItem = 0;
        this.totalMoney = 0;
        let tmpObj = this.cartService.getCart();
        this.cart = Object.keys(tmpObj).reduce((a, b) => {
          a = [...a, tmpObj[b]]
          // console.log(tmpObj[b][0]['price'])
          this.totalItem += tmpObj[b][1];
          // console.log(this.totalItem);
          this.totalMoney += tmpObj[b][0]['price'] * tmpObj[b][1];
          return a;
        }, []);
        // console.log(this.cart)
      }
    });
  }

  checkOut() {
    console.log(localStorage.getItem('username'))
    if (localStorage.getItem('username') == '') {
      this.router.navigate(['/login']);
      return false;
    }
    let tmpAsynArr = Object.keys(this.cart).reduce((a, idx) => {
      a = [...a, this.foodService.updateProduct(this.cart[idx][0], this.cart[idx][1], this.totalItem, this.totalMoney)]
      return a;
    }, []);
    Observable.forkJoin(tmpAsynArr).subscribe(res => {
      // debugger
      this.cart = null;
    });
    this.router.navigate(['/check-out']);
  }

  clearCart(){
    let tmpAsynArr = Object.keys(this.cart).reduce((a, idx) => {
      a = [...a, this.foodService.updateProduct(this.cart[idx][0], this.cart[idx][1], this.totalItem, this.totalMoney)]
      return a;
    }, []);
    Observable.forkJoin(tmpAsynArr).subscribe(res => {
      this.cart = null;
    });
    let tmpObj = this.cartService.getCart();
    this.cart = Object.keys(tmpObj).reduce((a, b) => {
      a = [...a, tmpObj[b]]
      this.totalItem = tmpObj[b][1];
      return a;
    }, []);
  }

  ngOnInit() {
  }

}
