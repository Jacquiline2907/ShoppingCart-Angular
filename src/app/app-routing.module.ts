import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { SellerPageComponent } from './seller-page/seller-page.component';
import { MensFashionComponent } from './fashion/mens-fashion/mens-fashion.component';
import { WomensFashionComponent } from './fashion/womens-fashion/womens-fashion.component';
import { KidsFashionComponent } from './fashion/kids-fashion/kids-fashion.component';
import { ElectronicsComponent } from './fashion/electronics/electronics.component';
import { HomeFurnitureComponent } from './fashion/home-furniture/home-furniture.component';
import { TvAppliancesComponent } from './fashion/tv-appliances/tv-appliances.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { DisplayItemsComponent } from './fashion/display-items/display-items.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ManageProductsComponent } from './seller-page/manage-products/manage-products.component';



const routes: Routes = [
  { path:"", component:FirstPageComponent },
  { path:"login", component:LoginComponent},
  { path:"registration", component:RegistrationComponent},
  { path:"aboutus", component:AboutUsComponent},
  { path:"adminpage", component:AdminpageComponent},
  { path:"sellerPage", component: SellerPageComponent},
  { path:"customerPage", component: CustomerPageComponent},
  { path:"menFashion", component: MensFashionComponent},
  { path:"womenFashion", component: WomensFashionComponent},
  { path:"kidsFashion", component: KidsFashionComponent},
  { path:"electronics", component: ElectronicsComponent},
  { path:"homeFurniture", component: HomeFurnitureComponent},
  { path:"tvAppliances", component: TvAppliancesComponent},
  { path:"displayItems", component: DisplayItemsComponent},
  { path:"addToCart", component: AddToCartComponent},
  { path:"buyNow", component: BuyNowComponent},
  { path:"manageproducts", component: ManageProductsComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
