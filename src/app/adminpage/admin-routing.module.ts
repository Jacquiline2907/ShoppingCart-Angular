import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SellerDetailsComponent } from './seller-details/seller-details.component';
import { AdminViewProductsComponent } from './admin-view-products/admin-view-products.component';




const routes: Routes = [
 
  { path:"adminViewProducts", component:AdminViewProductsComponent },
  { path:"sellerDetails",component:SellerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


