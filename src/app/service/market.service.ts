import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Market from '../model/Marke';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  private marketsUrl: string;
 
  constructor(private http: HttpClient) {
    this.marketsUrl = 'http://localhost:8080/markets';
  }
 
  public findAll(): Observable<any[]> {
    return this.http.get<Market[]>(this.marketsUrl+"/AllMarkets");
  }
}
