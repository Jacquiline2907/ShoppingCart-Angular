import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-seller-page',
  templateUrl: './seller-page.component.html',
  styleUrls: ['./seller-page.component.css']
})
export class SellerPageComponent implements OnInit {

  username : string;
  userid : number;
  constructor(private service : ShoppingService) { }

  ngOnInit() {
    // this.username = JSON.parse(sessionStorage.getItem("name"));
    // this.service.getUserId(this.username).subscribe(x =>{
    //   console.log(x);
    //   this.userid=x;
    //   sessionStorage.setItem("userId",this.userid +"");
    // })

    
  }



}
