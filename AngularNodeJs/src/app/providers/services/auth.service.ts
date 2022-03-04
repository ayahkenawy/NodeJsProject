import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogin:boolean=false
  public User:any=null
  commoneApiURL = "https://nodejsproject-nti.herokuapp.com/"
  constructor(private _http: HttpClient) { }
  register(data: any): Observable<any> {
    return this._http.post(`${this.commoneApiURL}user/register`, data)
  }
  login(data:any):Observable<any>{
    return this._http.post(`${this.commoneApiURL}user/login`, data)
  }
  me():Observable<any>{
    return this._http.get(`${this.commoneApiURL}user/me`)
  }
  logout():Observable<any>{
    return this._http.post(`${this.commoneApiURL}user/logout`,null)
  }
  getAllCategories():Observable<any>{
    return this._http.get(`${this.commoneApiURL}category/all`)
  }
  getProductByCategoryId(catId:number):Observable<any>{
    return this._http.get(`${this.commoneApiURL}product/all/${catId}`)
  }
  getSingleProduct(productId:number):Observable<any>{
    return this._http.get(`${this.commoneApiURL}product/find/${productId}`)
  }
}
