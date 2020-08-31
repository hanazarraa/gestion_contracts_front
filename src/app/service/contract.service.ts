import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contract } from '../model/Contract';
import { ContractPhoneNumber } from '../model/ContractPhoneNumber';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private contractsUrl: string;
 
  constructor(private http: HttpClient) {
    this.contractsUrl = 'http://localhost:8080/contracts';
  }
  public findAll(): Observable<any[]> {
    return this.http.get<Contract[]>(this.contractsUrl+"/getContracts");
  }
 
  public save(contract: Contract) {
    return this.http.post<any>(this.contractsUrl+"/create", contract);
  }
}
