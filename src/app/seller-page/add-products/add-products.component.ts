import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ShoppingService } from 'src/app/shopping.service';
import { timeout } from 'q';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  fileimage: any = File;

  constructor(private service: ShoppingService) { }

  userKey : string;
  ngOnInit() {
  }

  productForm = new FormGroup({
    SectionKey: new FormControl(''),
    Name: new FormControl(''),
    Description: new FormControl(''),
    Price: new FormControl(''),
    Discount: new FormControl(''),
    Stock: new FormControl('')
  })

  insertImage(value) {
    const file = value.target.files[0];
    console.log(file);
    this.fileimage = file;
  }

  AddProduct() {

    this.userKey = sessionStorage.getItem("userKey");
  
    const data = this.productForm.value;
    var formdata = new FormData();
    formdata.append("Data", JSON.stringify(data));
    formdata.append("ImageFile", this.fileimage);
    console.log(formdata.get('image'));
    // console.log(this.userId);
   
    this.service.addProducts(formdata, this.userKey).subscribe(data => {
      console.log(data);
      
    })
  }

  refresh()
  {
    location.reload();
  }
}