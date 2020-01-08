import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/shopping.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.css']
})
export class DisplayItemsComponent implements OnInit {

  wDress: object;
  email: string;
  // name : string;
  constructor(private service: ShoppingService, private sanitize: DomSanitizer, private router: Router) { }

  ngOnInit() {
    this.wDress = JSON.parse(sessionStorage.getItem("wFashion"));
    this.email = sessionStorage.getItem("email");
    console.log(this.wDress['productKey']);
    console.log(this.email);

  }

  Quantity = new FormGroup({
    quantity: new FormControl
  })


  fetchimage(url: string) {
    return this.sanitize.bypassSecurityTrustUrl(url);
  }

  submit() {
    console.log(this.Quantity.value.quantity);
  }

  addToCart()
  {
    var formdata = new FormData();
    // formdata.append("email",this.email);
    formdata.append("quantity",this.Quantity.value.quantity);
    formdata.append("productKey",this.wDress['productKey']) ;
    console.log(formdata.get('email'));
    this.service.addProductsToCart(formdata, this.email).subscribe(x=>{
      console.log(x);
    })
  }
}
