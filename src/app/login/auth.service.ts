import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public username: String;
  public password: String;
  private baseUrl="http://localhost:8080/users/getAll";
  constructor(private http: HttpClient) {

  }
  LoginUser(user:User):Observable<any>{
    console.log(user);
    return this.http.post<any>(`http://localhost:8080/users/login`,user);
  }
  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  authenticationService(user:User) {
    console.log(user.username);
    return this.http.post<any>(`http://localhost:8080/users/login`,user);
   /*return this.http.post(`http://localhost:8080/users/login`,
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
     /*   console.log(res);
        console.log(username);
        this.username = username;
        this.password = password;*/
       // this.registerSuccessfulLogin(username, password);
      //}));
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
    console.log(sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME));
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }
}