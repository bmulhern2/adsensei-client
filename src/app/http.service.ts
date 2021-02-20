import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from './User.interface'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = 'https://adsensei.herokuapp.com'
  constructor(private http: HttpClient) { }
  signUp(newUser: User) {
    return this.http.post(this.baseUrl + '/api/user/signup', newUser, httpOptions)
  }
  signIn(newUser: User) {
    return this.http.post(this.baseUrl + '/api/user/validate', newUser, httpOptions)
  }
  getRequests(email: string) {
    return this.http.get(this.baseUrl + '/api/get/requests/' + email, httpOptions);
  }
  getToken(email: string) {
    return this.http.get(this.baseUrl + '/api/get/api/key/' + email, httpOptions);
  }
  getStripeKey() {
    return this.http.get(this.baseUrl + '/api/get/stripe/key', httpOptions);
  }
  payBill(data: any) {
    return this.http.post(this.baseUrl + '/create-checkout-session', data, httpOptions);
  }
}
