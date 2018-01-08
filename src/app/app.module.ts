import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CustomFormsModule} from 'ng2-validation';
import {DataTableModule} from 'angular-4-data-table';
import { CarouselModule } from 'angular4-carousel';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {QuantityComponent} from "./shopping-cart/quantity/quantity.component";


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder,FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { TransferToNumberPipe } from './transfer-to-number.pipe';
import {AddDataService} from './admin/product-form/add-data.service';
import {HttpModule} from '@angular/http';
import { RegisterComponent } from './register/register.component';
import {CategoryService} from "./products/category.service";
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import {ShoppingCartService} from "./shopping-cart/shopping-cart.service";
import {UserService} from "./register/user.service";
import {AlertService} from "./alert.service";
import {AuthenticationService} from "./authentication.service";
import {FoodService} from './shopping-cart/food.service';
import {SaveOrderService} from "./check-out/save-order.service";


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    LoginComponent,
    ProductFormComponent,
    TransferToNumberPipe,
    RegisterComponent,
    ProductFilterComponent,
    ProductCardComponent,
    QuantityComponent
  ],
  imports: [
    HttpModule,
    CarouselModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    FlashMessagesModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: ProductsComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'check-out', component: CheckOutComponent},
      {path: 'order-success', component: OrderSuccessComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'admin/orders', component: AdminOrdersComponent},
      {path: 'my/orders', component: MyOrdersComponent},
      {path: 'admin/products/new', component: ProductFormComponent},
      {path: 'admin/products/:id', component: ProductFormComponent},
      {path: 'admin/products', component: AdminProductsComponent}
    ])
  ],
  providers: [
    AddDataService,
    CategoryService,
    ShoppingCartService,
    FormBuilder,
    UserService,
    AlertService,
    FoodService,
    SaveOrderService,
    AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
