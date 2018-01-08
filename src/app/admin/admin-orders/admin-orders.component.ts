import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/forkJoin';
import {SaveOrderService} from "../../check-out/save-order.service";

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders: any[];

  constructor(private orderService: SaveOrderService) {
    this.updateOrders();
  }


  updateOrders(){
    this.orderService.getOrder()
      .subscribe(res => {
        this.orders = res.json();
      });
  }
  ngOnInit() {
  }

}
