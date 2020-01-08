import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPageComponent } from './customer-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { OrdersComponent } from './orders/orders.component';



@NgModule({
  declarations: [
    CustomerPageComponent,
    MyProfileComponent,
    ViewProductsComponent,
    CartListComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomerRoutingModule

  ]
})
export class CustomerpageModule { }
