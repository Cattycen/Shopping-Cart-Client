import {Component, OnInit} from '@angular/core';
import {AddDataService} from '../product-form/add-data.service';
import {Subscription} from "rxjs/Subscription";
import {Product} from "../../models/product";
import {DataTableResource} from "angular-4-data-table";

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: Product[] = [];
  products$: any[] = [];
  items: Product[] = [];
  itemCount: number;
  tableResourse: DataTableResource<Product>;
  subscription: Subscription;

  constructor(private service: AddDataService) {
    this.updateProducts();
    // this.initializeTable(this.products);
  }

  private initializeTable(products: Product[]) {
    this.tableResourse = new DataTableResource(products);
    this.tableResourse.query({offset: 0}).
    then(items => this.items = items);
    this.tableResourse.count().
    then(count => this.itemCount = count);
  }

  filter(query: string) {
    let filteredProducts = (query) ?
      this.products$.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.products$;

    this.initializeTable(filteredProducts);
  }

  reloadItems(params) {
    if (!this.tableResourse) return;
    this.tableResourse.query(params)
      .then(items => this.items = items);
  }

  ngOnInit() {
  }

  updateProducts() {
    this.service.getProducts()
      .subscribe(res => {
        console.log(res.json());
        this.products$ = res.json();
      });
  }

  deleteProducts(e, idx) {
    this.service.deleteProducts(idx)
      .subscribe(res => {
        // console.log(res.json());
        this.products$ = res.json();
      })

  }

}
