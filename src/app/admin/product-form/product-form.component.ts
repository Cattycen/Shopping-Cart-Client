import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AddDataService} from "./add-data.service";
import {CategoryService} from "../../products/category.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  // categories= ['Bread', 'Dairy', 'Fruits', 'Seasonings and Spices', 'Vegetables'];
  categories: any[];
  products: any[];
  constructor(private router: Router,
              private service: AddDataService,
              private route: ActivatedRoute,
              private categoryService: CategoryService) {

    this.service.getProducts()
      .subscribe(res => {
        this.products = res.json();
      });


    this.categories = this.categoryService.categories;
  }

  save(product) {
    // this.router.navigate(['/admin/products']);
  }

  createProducts(titleText, priceText, imageUrlText, categoryText) {
    let self = this;

    this.service.createProducts(titleText, priceText, imageUrlText, categoryText)
      .subscribe(res => {
        console.log(res.json());
        this.router.navigate(['/admin/products']);
        self.products = res.json();
      });
  }


  ngOnInit() {
  }

}
