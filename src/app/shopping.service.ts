import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  private baseUrl = 'http://localhost:5000/api';

  login(loginDetails: object): Observable<Object> {
    //let params = new HttpParams().set("name",firstName).set('password', password)
    return this.httpClient.post(`${this.baseUrl}/login`, loginDetails);
  }

  register(register: any): Observable<any> {
    console.log('calling regDetails');
    return this.httpClient.post(`${this.baseUrl}/register`, register);
  }

  manageSellers(): Observable<Object> {
    return this.httpClient.get(`${this.baseUrl}/sellers`);
  }

  womensFashion(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/womensFashion`);
  }

  Profile(userKey: string): Observable<any> {
    let params = new HttpParams().set("userKey", userKey)
    return this.httpClient.get(`${this.baseUrl}/profile`, { params });
  }


  addProducts(products: any, userKey: string): Observable<any> {
    let params = new HttpParams().set("userKey", userKey)
    console.log(params);
    return this.httpClient.post(`${this.baseUrl}/sellers/products`, products, { params });
  }

  getUserId(name: string): Observable<any> {
    let params = new HttpParams().set("name", name)
    return this.httpClient.get(`${this.baseUrl}/userId`, { params });
  }

  getSellerProducts(userKey: string): Observable<any> {
    let params = new HttpParams().set("userKey", userKey)
    return this.httpClient.get(`${this.baseUrl}/sellers/products`, { params });
    //return this.httpClient.get(`${this.baseUrl}/sellers/${params}/products`);
  }

  addProductsToCart(cart: any, email: string): Observable<any> {
    let params = new HttpParams().set("email", email);
    return this.httpClient.post(`${this.baseUrl}/carts`, cart, { params });
  }

  getCartList(userKey: string): Observable<any> {
    let params = new HttpParams().set("userKey", userKey);
    return this.httpClient.get(`${this.baseUrl}/carts`, { params });
  }

}
