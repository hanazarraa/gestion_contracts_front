import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contract } from '../model/Contract';
import { ContractPhoneNumber } from '../model/ContractPhoneNumber';

@Injectable({
  providedIn: 'root'
})
export class ContractPhonenumberService {

  private contracts_phonenumbersUrl: string;
 
  constructor(private http: HttpClient) {
    this.contracts_phonenumbersUrl = 'http://localhost:8080/contracts_phone_numbers';
  }
  public findAll(): Observable<any[]> {
    return this.http.get<ContractPhoneNumber[]>(this.contracts_phonenumbersUrl+"/getAll");
  }
 
  public save(contractphoneNumber: ContractPhoneNumber) {
    console.log(contractphoneNumber);
    return this.http.post<any>(this.contracts_phonenumbersUrl+"/create", contractphoneNumber);
  }
  
}
