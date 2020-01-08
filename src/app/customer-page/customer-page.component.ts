import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {
  
  username : string;

  constructor(private router : Router, private service : ShoppingService) { }

  ngOnInit() {
    // this.username = sessionStorage.getItem(JSON.parse("name"));
    // this.service.getUserId(this.username).subscribe(x =>{
    //   console.log(x);
    // })
    console.log(sessionStorage.getItem("userKey"))
  }

  viewProducts()
  {
    this.router.navigate(['/viewProducts']); 
  }

  myProfile()
  {
    this.router.navigate(['myProfile']); 
  }

  cartList()
  {
    this.router.navigate(['/cartList']); 
  }

  orders()
  {
    this.router.navigate(['/orders']); 
  }

}
