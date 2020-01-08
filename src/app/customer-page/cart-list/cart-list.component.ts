import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/shopping.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  userId: string;
  cartListDetails : any[]=[];

  constructor(private service: ShoppingService, private sanitize : DomSanitizer) { }

  fetchImage(url : string)
  {
    return this.sanitize.bypassSecurityTrustUrl('data:image/jpeg;base64,'+url);
  }

  ngOnInit() {
    this.userId = sessionStorage.getItem("userKey");
    console.log(this.userId);
    this.service.getCartList(this.userId).subscribe(x => {
     
      this.cartListDetails = x;
      console.log(this.cartListDetails);
    })
  }

}
