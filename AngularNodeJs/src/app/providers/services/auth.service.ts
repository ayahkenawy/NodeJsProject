import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  commoneApiURL = "https://nodejsproject-nti.herokuapp.com/"
  constructor(private _http: HttpClient) { }
  register(data: any): Observable<any> {
    return this._http.post(`${this.commoneApiURL}user/register`, data)
  }
}
