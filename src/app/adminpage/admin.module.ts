import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminViewProductsComponent } from './admin-view-products/admin-view-products.component';
import { SellerDetailsComponent } from './seller-details/seller-details.component';
import { AdminpageComponent } from './adminpage.component';
import { AdminRoutingModule } from './admin-routing.module';




@NgModule({
  declarations: [
    
    AdminViewProductsComponent,
    SellerDetailsComponent,
    AdminpageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminRoutingModule
  ],
  providers: [],
  
})
export class AdminModule { }

