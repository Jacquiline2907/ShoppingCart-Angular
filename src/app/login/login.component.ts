import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ShoppingService } from '../shopping.service';
import { Router } from '@angular/router';
import { UserDetails } from '../UserDetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ShoppingService, private router: Router) { }
  details : UserDetails ;
  loginDetails : object;

  ngOnInit() {
  }

  loginForm = new FormGroup({
    Email: new FormControl(''),
    password: new FormControl('')
  })

  login() {

    sessionStorage.setItem("email", this.loginForm.value.Email);
      console.log(sessionStorage.getItem("email"));

    if (this.loginForm.value.Email == "admin" && this.loginForm.value.password == "admin") {
      this.router.navigate(["adminpage"]);
    }
    else {
      this.service.login(this.loginForm.value)
        .subscribe(x => {
          this.loginDetails=x;
          sessionStorage.setItem("userKey",this.loginDetails['userKey']);

          console.log(x);
          
        
          if(this.loginDetails['roleKey']==2)
          {
            this.router.navigate(["sellerPage"]);
          }
          else if(this.loginDetails['roleKey']==3){
            this.router.navigate(["customerPage"]);
          }
          else
          {
            this.router.navigate(["adminpage"]);
          }
        })
    }
    
   
    

    //console.log(this.details.);
  }

  register()
  {
    this.router.navigate(["registration"]);
  }

  forgotPassword()
  {
    
  }
}
