import { Component } from '@angular/core';
import {AddDataService} from "../admin/product-form/add-data.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../models/product";
import {ShoppingCartService} from "../shopping-cart/shopping-cart.service";
import {ShoppingCart} from "../models/shopping-cart";
import 'rxjs/add/operator/switchMap';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  // products$;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;

  public imageSources: string[] = [
    'http://www.slobodenpecat.mk/wp-content/uploads/2017/09/vegetables-700053_960_720.jpg',
    'http://21425-presscdn.pagely.netdna-cdn.com/wp-content/uploads/2017/01/FSSAI-drafts-amendment-related-to-Dairy-Products-and-Analogues.jpg',
    'https://static.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg',
    'http://healthyohealthy.com/wp-content/uploads/2015/07/raw-potato-for-eyes.jpg'
  ];

  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 768
  };

  constructor(private service: AddDataService,
              private route: ActivatedRoute,
              private shoppingCartService: ShoppingCartService) {
    // this.updateProducts();

    this.service.getProducts()
      .subscribe(products => {
        // console.log(products.json());
        this.products = products.json();
        route.queryParamMap.subscribe(params => {
          this.category = params.get('category');
          this.filteredProducts = (this.category) ?
            this.products.filter(p => p.category === this.category) :
            this.products;
        });
      });


  }


  updateProducts() {
    this.service.getProducts()
      .subscribe(products => {
        // console.log(products.json());
        this.products = products.json();
      });
  }


}
