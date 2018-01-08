import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from "../shopping-cart.service";
import {Product} from "../../models/product";

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {
  price: number = 0;
  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart;

  constructor(private cartService: ShoppingCartService) {

  }

  ngOnInit() {
  }


  handleMinusClick() {
    // console.log(this.shoppingCart)
    if (this.shoppingCart > 0) {
      this.shoppingCart--;
      this.cartService.minusProductFromCart(this.product);
      this.cartService.changeQuantity(true);
    }
  }

  handlePlusClick() {
    // console.log(this.shoppingCart)

    this.shoppingCart++;
    this.cartService.addProductToCart(this.product);
    this.cartService.changeQuantity(true);

  }


}
