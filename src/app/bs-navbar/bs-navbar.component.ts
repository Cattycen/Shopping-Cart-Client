import {Component} from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from "@angular/router";
import {ShoppingCartService} from "../shopping-cart/shopping-cart.service";

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent{
  loginStatus = 0;
  username = '';
  totalItem: number = 0;
  cart: any = null;
  isAdmin = false;

  constructor(private authService: AuthenticationService,
              private cartService: ShoppingCartService,
              private flashMessagesService: FlashMessagesService,
              private router: Router) {

    this.authService.showNavBarEmitter.subscribe(mode => {
      if (mode !== null) {
        this.loginStatus = 1;
        let tmpName = localStorage.getItem('username');
        this.username = tmpName;
        this.router.navigate(['/products'], {skipLocationChange: false});

        // tmpIsAdmin == 'admin' ? this.isAdmin = true : this.isAdmin = false;

        tmpName == 'cencen' ? this.isAdmin = true : this.isAdmin = false;
      }
    });

    this.cartService.addToCartEmitter.subscribe(mode => {
      if (mode !== null) {
        this.totalItem = 0;
        // console.log(typeof(this.cartService.getCart()))
        let tmpObj = this.cartService.getCart();
        this.cart = Object.keys(tmpObj).reduce((a, b) => {
          a = [...a, tmpObj[b]]

          this.totalItem += tmpObj[b][1];
          // console.log(this.totalItem);
          return a;
        }, []);
        // console.log(this.cart);
      }
    });

    this.cartService.changeQuantityEmitter.subscribe(mode => {
      if (mode != null) {
        this.totalItem = 0;
        let tmpObj = this.cartService.getCart();
        this.cart = Object.keys(tmpObj).reduce((a, b) => {
          a = [...a, tmpObj[b]]
          // console.log(tmpObj[b][0]['price'])
          this.totalItem += tmpObj[b][1];
          // console.log(this.totalItem);
          return a;
        }, []);
        // console.log(this.cart)
      }
    });
  }


  onLogoutClick() {
    this.authService.showNavBar(true);
    this.authService.showNavBarEmitter.subscribe(mode => {
      localStorage.setItem('username', '');
      this.loginStatus = 0;
    })
  }


}
