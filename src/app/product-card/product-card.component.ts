import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ShoppingCartService} from "../shopping-cart/shopping-cart.service";
import {FoodService} from "../shopping-cart/food.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{
  @Input ('product') product: Product;
  @Input ('show-actions') showActions = true;
  @Input ('shopping-cart') shoppingCart;

  private sub: any;
  id: number;
  // product: object=null;
  largeDisplayImg:string;

  constructor(private cartService: ShoppingCartService,
              private FoodService: FoodService,
              private activatedRoute: ActivatedRoute) { }

  addToCart(product){
    this.cartService.addProductToCart(product);
    this.cartService.addToCart(true);

  }
  //
  // getQuantity(){
  //   let item = this.shoppingCart.items[this.product.$key];
  //   return item ? item.quantity : 0;
  // }

  switchedDisplayImg(idx) {
    this.largeDisplayImg = this.product['imageUrl'][idx];
  }

  ngOnInit() {
  }



}
