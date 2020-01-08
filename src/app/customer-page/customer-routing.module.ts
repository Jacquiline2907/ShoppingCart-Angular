import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { OrdersComponent } from './orders/orders.component';



const routes: Routes = [
 
  { path:"myProfle", component:MyProfileComponent },
  { path:"viewProducts", component:ViewProductsComponent },
  { path:"cartList", component:CartListComponent },
  { path:"orders", component:OrdersComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
