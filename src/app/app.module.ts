import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { SellerPageComponent } from './seller-page/seller-page.component';
import { AdminModule } from './adminpage/admin.module';
import { MensFashionComponent } from './fashion/mens-fashion/mens-fashion.component';
import { WomensFashionComponent } from './fashion/womens-fashion/womens-fashion.component';
import { KidsFashionComponent } from './fashion/kids-fashion/kids-fashion.component';
import { ElectronicsComponent } from './fashion/electronics/electronics.component';
import { HomeFurnitureComponent } from './fashion/home-furniture/home-furniture.component';
import { TvAppliancesComponent } from './fashion/tv-appliances/tv-appliances.component';
import { CustomerpageModule } from './customer-page/customerpage.module';
import { DisplayItemsComponent } from './fashion/display-items/display-items.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SellerModule } from './seller-page/seller.module';


@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    LoginComponent,
    RegistrationComponent,
    SellerPageComponent,
    MensFashionComponent,
    WomensFashionComponent,
    KidsFashionComponent,
    ElectronicsComponent,
    HomeFurnitureComponent,
    TvAppliancesComponent,
    DisplayItemsComponent,
    AddToCartComponent,
    BuyNowComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    FormsModule,
    CustomerpageModule,
    AngularFontAwesomeModule,
    SellerModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
