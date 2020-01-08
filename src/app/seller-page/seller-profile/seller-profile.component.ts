import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/shopping.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.css']
})
export class SellerProfileComponent implements OnInit {

  userKey: string;
  profile: any;

  constructor(private service: ShoppingService, private router: Router, private sanitize : DomSanitizer) { }

  ngOnInit() {
    this.userKey = sessionStorage.getItem("userKey");

    this.service.Profile(this.userKey).subscribe(x => {
     this.profile=x;
      console.log(this.profile);
   
      // for (let i = 0; i < x.length; i++) {
      //   this.profile[i].profileImage = 'data:image/jpeg;base64,' + this.profile[i].profileImage;
      
      //   }
        
    })
  }

  fetchimage(url: string) {
    return this.sanitize.bypassSecurityTrustUrl('data:image/jpeg;base64,'+url);
  }



  back() {
    this.router.navigate(['sellerPage']);
  }


}
