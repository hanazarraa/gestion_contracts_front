import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Observable } from 'rxjs';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private usersUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8081/users';
  }
 
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
 
  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
  register(user:User):Observable<any>{
    console.log("hana");
    return this.http.post<any>(`http://localhost:8081/users/create`,user);
  }
  getUserById(id:any):Observable<any>{
    return this.http.get<any>(`${this.usersUrl}/${id}`,id);
  }
  updateUser(id:any,user:any):Observable<any>{
    return this.http.put(`${this.usersUrl}/update/${id}`,user);

  }
  deleteUser(id:any):Observable<any>{
    return this.http.delete(`${this.usersUrl}/delete/${id}`);

  }
}
