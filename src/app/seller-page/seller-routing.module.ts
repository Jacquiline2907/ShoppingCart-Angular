import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SellerProductsComponent } from './seller-products/seller-products.component';
import { SellerProfileComponent } from './seller-profile/seller-profile.component';
import { AddProductsComponent } from './add-products/add-products.component';



const routes: Routes = [
 
  { path:"sellerProducts", component:SellerProductsComponent },
  { path:"sellerProfile",component:SellerProfileComponent },
  { path:"addProducts", component:AddProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
