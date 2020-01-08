import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/shopping.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-womens-fashion',
  templateUrl: './womens-fashion.component.html',
  styleUrls: ['./womens-fashion.component.css']
})
export class WomensFashionComponent implements OnInit {

  wFashion : any[]=[];

  constructor(private service : ShoppingService, private sanitize: DomSanitizer, private router: Router) { }

  fetchimage(url: string) {
    return this.sanitize.bypassSecurityTrustUrl(url);
    }

  ngOnInit() {
    this.service.womensFashion().subscribe(x => {
      console.log(x);
      this.wFashion=x;
      for (let i = 0; i < x.length; i++) {
        this.wFashion[i].image = ('data:image/jpeg;base64,' + this.wFashion[i].image);
        }
    })
  }

  display(index)
  {
      //console.log(this.wFashion[index]);
      sessionStorage.setItem("wFashion",JSON.stringify(this.wFashion[index]));
      this.router.navigate(["displayItems"]);
    
  }

}
