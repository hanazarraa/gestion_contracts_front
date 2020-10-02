import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from '../model/Service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private servicesUrl: string;
 
  constructor(private http: HttpClient) {
    this.servicesUrl = 'http://localhost:8080/services';
  }
 
  public findAll(): Observable<Service[]> {
    return this.http.get<Service[]>(this.servicesUrl+"/getAll");
  }
  getServiceById(id:any):Observable<any>{
    return this.http.get<any>(`${this.servicesUrl}/${id}`,id);
  }
  public findServicesByOffer(offer): Observable<any> {
    console.log(offer);
    //return this.http.get<any>(this.servicesUrl+"/getAll");

    return this.http.get<any>(`${this.servicesUrl}/getServices/?offer_id=${offer}`,offer);
  }
}
