import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/shopping.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  userKey : string;
  section : string;
  productDetails : object;
  constructor(private service : ShoppingService, private sanitize : DomSanitizer) { }

  ngOnInit() {
    this.userKey = sessionStorage.getItem("userKey");
    this.service.getSellerProducts(this.userKey).subscribe(x=>{
    
      this.productDetails=x;
      console.log(x);

     console.log(x.sectionKey);
  
    })
  }

  
  fetchimage(url: string) {
    return this.sanitize.bypassSecurityTrustUrl('data:image/jpeg;base64,'+url);
  }

}
