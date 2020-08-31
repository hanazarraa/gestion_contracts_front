import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhoneNumber } from '../model/PhoneNumber';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberService {

  private phonesUrl: string;
 
  constructor(private http: HttpClient) {
    this.phonesUrl = 'http://localhost:8080/phone_numbers';
  }
 
  public findAll(): Observable<any[]> {
    return this.http.get<PhoneNumber[]>(this.phonesUrl+"/AllphoneNumbers");
  }
  public findFreePhoneNumbers():Observable<any[]>{
        return this.http.get<PhoneNumber[]>(this.phonesUrl+"/free");
  }
}
