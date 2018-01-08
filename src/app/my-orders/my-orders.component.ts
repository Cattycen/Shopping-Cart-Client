import {Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import {ShoppingCart} from "../models/shopping-cart";
import {ShoppingCartService} from "../shopping-cart/shopping-cart.service";
import {FoodService} from "../shopping-cart/food.service";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  order: any[];

  constructor( private foodService: FoodService){
   this.updateOrders();
  }

  updateOrders(){
    this.foodService.getProduct()
      .subscribe(res => {
        this.order = res.json();
        // console.log(this.order);
      });

  }


  ngOnInit() {
  }

}
