import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShoppingService } from '../shopping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  hide: boolean = false;
  fileimage:any = File;

  constructor(private service: ShoppingService, private router: Router) { }

  registerDetails : object;
  ngOnInit() {
  }

  registerForm = new FormGroup({
    RoleKey: new FormControl(''),
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    GenderKey: new FormControl(''),
    Email: new FormControl(''),
    PhoneNumber: new FormControl(''),
    Password: new FormControl(''),
    retypePassword: new FormControl('')
  })

  insertImage(value) {
    const file = value.target.files[0];
    console.log(file);
    this.fileimage = file;
  }

  register() {


    const data = this.registerForm.value;
    var formdata = new FormData();
    formdata.append("Data", JSON.stringify(data));
    formdata.append("ImageFile", this.fileimage);
    console.log(formdata.get('image'));
    this.service.register(formdata).subscribe(data => {
      console.log(data);
      this.registerDetails=data;
      sessionStorage.setItem("userKey",this.registerDetails['userKey']);
      

      if(this.registerForm.value.RoleKey==2)
      {
        this.router.navigate(['sellerPage']);
      }
      else
      {
        this.router.navigate(['customerPage']);
      }
      
    })
  }

  show() {
    this.hide = true;
  }
}

//this.disable1 = !this.disable1;
      // this.hideform3=true; 
      // console.log("edfe" + data);
      //if (data !== null) {
      //this.modelservice.open(complaintcontent);

      //console.log(data);


      // this.service.register(this.registerForm.value)
      //   .subscribe(x => {

      //     console.log(x);

      //   })

      // if (this.registerForm.value.role === "seller") {
      //   this.router.navigate(['sellerPage']);
      // }
      // else {
      //   this.router.navigate(["customerPage"]);
      // }

