import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {

  constructor(private router: Router) { }

  changeToMyOrder(){
    setTimeout(() => {
      this.router.navigate(['/my/orders']); // Navigate to My Order Page
    }, 5000);
  }

  ngOnInit() {
  }

}
