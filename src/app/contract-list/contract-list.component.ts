import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContractService } from '../service/contract.service';
import { OfferService } from '../service/offer.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  searchText:string;
  contracts: any;
  firstname=null;
  constructor(
    private router: Router,
    private contractService:ContractService) {}

  ngOnInit() {
  //location.reload(); 
    this.reloadData();
   // location.reload();
  }
  /*search() {
    console.log(this.firstname);
    this.router.navigate(['customers/search',this.firstname]);
     
    /*this.customerService.findByFname(this.firstname)
      .subscribe(
        data => {
          this.customers1= data;
          console.log(data);
         // location.reload();
        },
        error => {
          console.log(error);
        });*/

  //}

  reloadData() {
    this.contractService.findAll()
      .subscribe(
        data => {
          this.contracts= data;
          console.log(data);
          this.contracts.forEach(contract=>{
           console.log(contract.offer);
          });
         // location.reload();
        },
        error => {
          console.log(error);
        }); 
  
  }
  addContract(){
    this.router.navigate(['contracts/create']);
  }
  contractUpdate(id:any){
    console.log(id);
    this.router.navigate(['customers/update', id]);

  }
  
  contractDelete(id:any){
   /* this.contractService.deleteContract(id)
    .subscribe(data => {
      console.log("deleted");
      location.reload();
    
    }, error => console.log(error));*/
   
  }
  /*customerDetails(id: any){
    console.log(id);
    this.router.navigate(['customers/details', id]);
  }*/

 





}
