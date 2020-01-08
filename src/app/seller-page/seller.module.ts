import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerProfileComponent } from './seller-profile/seller-profile.component';
import { SellerProductsComponent } from './seller-products/seller-products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerRoutingModule } from './seller-routing.module';
import { AddProductsComponent } from './add-products/add-products.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';



@NgModule({
  declarations: [
      SellerProductsComponent,
      SellerProfileComponent,
      AddProductsComponent,
      ManageProductsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SellerRoutingModule
  ],
  providers: [],
  
})
export class SellerModule { }
