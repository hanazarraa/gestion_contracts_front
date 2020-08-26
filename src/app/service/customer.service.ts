import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customersUrl: string;
 
  constructor(private http: HttpClient) {
    this.customersUrl = 'http://localhost:8081/customers';
  }
 
  public findAll(): Observable<any[]> {
    return this.http.get<Customer[]>(this.customersUrl+"/AllCustomers");
  }
 
  public save(customer: Customer) {
    return this.http.post<any>(this.customersUrl+"/create", customer);
  }
 
  getCustomerById(id:any):Observable<any>{
    return this.http.get<any>(`${this.customersUrl}/${id}`,id);
  }
  updateCustomer(id:any,customer:any):Observable<any>{
    return this.http.put(`${this.customersUrl}/${id}`,customer);

  }
  deleteCustomer(id:any):Observable<any>{
    return this.http.delete(`${this.customersUrl}/${id}`);

  }
  findByFname(fname:string):Observable<any>{
    return this.http.get(`${this.customersUrl}/search/?fname=${fname}`);
  }
}
