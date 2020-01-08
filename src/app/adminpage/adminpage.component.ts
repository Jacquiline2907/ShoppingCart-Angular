import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  constructor(private service: ShoppingService,  private router: Router) { }

  register: object
  ngOnInit() {
  
  }

  // manageSellers() {

  //   this.router.navigate(["sellerDetails"]);

  // }

  // viewProducts() {
  //   this.router.navigate(["adminViewProducts"]);
  // }

}
