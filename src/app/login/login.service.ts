import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from './Login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private apiServerUrl = environment.apiBaseUrl;



  constructor(private http: HttpClient) { }



  public LoginIn(login: Login): Observable<Login> {
    return this.http.post<Login>(`${this.apiServerUrl}/login`, login)
  };

  // private isLoggedIn = false;

  // // Call this method when the user logs in
  // login() {
  //   this.isLoggedIn = true;
  // }

  // // Call this method to check if the user is logged in
  // isAuthenticated() {
  //   return this.isLoggedIn;
  // }

}
