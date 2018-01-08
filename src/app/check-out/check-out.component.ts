import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SaveOrderService} from "./save-order.service";

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  order: any[];

  constructor(private saveOrderService: SaveOrderService,
              private router: Router) {
    this.saveOrderService.getOrder()
      .subscribe(res => {
        this.order = res.json();
      });
  }

  ngOnInit() {
  }

  createOrder(nameText, addressLine1Text, addressLine2Text, cityText){
    let self = this;
    this.saveOrderService.createOrder(nameText, addressLine1Text, addressLine2Text, cityText)
      .subscribe(res => {
        this.router.navigate(['/order-success']);
        self.order = res.json();
      });
  }

}
