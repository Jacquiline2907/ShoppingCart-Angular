import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/shopping.service';


@Component({
  selector: 'app-seller-details',
  templateUrl: './seller-details.component.html',
  styleUrls: ['./seller-details.component.css']
})
export class SellerDetailsComponent implements OnInit {

  seller:object;

  constructor(private service: ShoppingService) { }

  ngOnInit() {
    // console.log("ghghgjh");
    this.service.manageSellers().subscribe(x => {
      this.seller=x;
      console.log("hai");
      console.log(x);
    },
    (error) => console.log(error)
    )
  }

}
