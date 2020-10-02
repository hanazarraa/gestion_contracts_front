import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  Offer  from '../model/Offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private offersUrl: string;
 
  constructor(private http: HttpClient) {
    this.offersUrl = 'http://localhost:8080/offers';
  }
 
  public findAll(): Observable<any[]> {
    return this.http.get<Offer[]>(this.offersUrl+"/AllOffers");
  }
  /*public findByMarket(market):Observable<any[]>{
      //return this.http.get<Offer[]>(this.offersUrl+"/AllOffers",market)
  }*/

}
