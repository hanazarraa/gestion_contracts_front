import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import  {Contract}  from '../model/Contract';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { FormBuilder } from "@angular/forms";
import { OfferService } from '../service/offer.service';
import { error } from 'protractor';
import { PhoneNumberService } from '../service/phone-number.service';
import { MarketService } from '../service/market.service';
import { ContractService } from '../service/contract.service';
import { ContractPhoneNumber } from '../model/ContractPhoneNumber';
import { ContractPhonenumberService } from '../service/contract-phonenumber.service';
import { Observable } from 'rxjs';
import { PhoneNumber } from '../model/PhoneNumber';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',

  styleUrls: ['./contract-create.component.css']
 
})

export class ContractCreateComponent implements OnInit {

  contractForm: FormGroup;
  loading = false;
  submitted = false;
  query:string;
  offers:any;
  phone_numbers:any;
  contractModel=new Contract();
  PhoneNumberModel =new PhoneNumber();
   customers:any;
   customer:any;
   offer:any;
   searchTerm:string;
   itemsCopy:any;
   items: string[] = [];
   contractPhoneNumberModel=new ContractPhoneNumber();
   markets:any;
   selected="fixe"
   c:any;
   market:any;
  current = 0;
  prev = -1;
  getCustomer(){
    console.log(this.contractModel.customer);
    /*this.customerService.getCustomerById(this.contractModel.customer.id)
    .subscribe(data => {
      console.log(data)
      this.customer = data;
      console.log(this.customer);
    }, error => console.log(error));*/
    
  }
  onSubmit(form:FormGroup){
  // console.log(form);
   //console.log(this.PhoneNumberModel);
   //this.contractPhoneNumberModel.phoneNumber=this.PhoneNumberModel;

   this.contractPhoneNumberModel.contract=this.contractModel;
   console.log(this.contractPhoneNumberModel);
   this.contractService.save(this.contractModel)
                        .subscribe(data =>{
                          console.log(data);
                          this.contractPhoneNumberModel.contract=data;
                        
    this.contractPhoneNumberService.save(this.contractPhoneNumberModel)
        .subscribe(
          data=>{
            console.log(data);

          },error=>{
            console.log(error);
          }
        )
      },
      error=>{
        console.log(error);
      });
  //
   //console.log(this.contractPhoneNumberModel);
   //this.contractModel.contractsphonenumbers.push(this.contractPhoneNumberModel);
   /*this.contractService.save(this.contractModel)
  
     .subscribe(
         data => {
           console.log(data);
           this.contractPhoneNumberModel.contract=data;
           console.log(this.contractPhoneNumberModel.phoneNumber.id);
           
           /*this.contractPhoneNumberService.save(this.contractPhoneNumberModel)
           .subscribe(
            data=>{
              this.c=data;
              console.log(data);
            },
            error=>{
              console.log(error);
            }
          );*/

           /*this.contractPhoneNumberService.save(this.contractPhoneNumberModel)
                .subscribe(
                  data=>{
                    console.log(data);
                    console.log("success")
                  }
                  ,error=>{console.log(error);
                  }
                );*/

           //console.log("success");
           //  this.alertService.success('Registration successful', true);
            // this.router.navigate(['/customers']);
      //   },
       //  error => {
          // console.log(error);
          //  // this.alertService.error(error);
        //     this.loading = false;
       //  });
    

  }
  search(): void {
    let term = this.searchTerm;
    this.customers = this.itemsCopy.filter(function(tag) {
        return tag.name.indexOf(term) >= 0;
    }); 
}
  onPrev() {
    this.prev = this.current--;
  }

  onNext() {
    this.prev = this.current++ ;
   
  }
  getMarket(){
    //console.log(this.contractModel.market);
    
    //this.offersMarket=this.contractModel.market.offers;
  }
  changeMarket(value){
    console.log(value);
  }

  isLeftTransition(idx: number): boolean {
    return this.current === idx ? this.prev > this.current : this.prev < this.current;
  }
 constructor(  private route: ActivatedRoute,
    private router: Router,
    private customerService:CustomerService,
    private offerService :OfferService,
    private phoneNumberService:PhoneNumberService,
    private marketService:MarketService,
    private contractService:ContractService,
    private contractPhoneNumberService:ContractPhonenumberService
    
   ) { 

 
}
searchMe(searchTerm: string, eachObject) {
  console.log(searchTerm);
  let replacedKey = searchTerm.replace(/[,\.-\s]/g, '')
  let newRegEx = new RegExp(replacedKey, 'gi');
  console.log(eachObject);
  let purgedName = eachObject.cin.replace(/[,\.-\s]/g, '')
  if (newRegEx.test(purgedName)) {
    return true
  }
  return false
}
searchOffer(searchTerm: string, eachObject) {
  console.log(searchTerm);
  let replacedKey = searchTerm.replace(/[,\.-\s]/g, '')
  let newRegEx = new RegExp(replacedKey, 'gi');
  console.log(eachObject);
  let purgedName = eachObject.offerDescription.replace(/[,\.-\s]/g, '')
  if (newRegEx.test(purgedName)) {
    return true
  }
  return false
}
searchPhone(searchTerm: string, eachObject) {
  console.log(searchTerm);
  let replacedKey = searchTerm.replace(/[,\.-\s]/g, '')
  let newRegEx = new RegExp(replacedKey, 'gi');
  console.log(eachObject);
  let purgedName = eachObject.phonenumber.replace(/[,\.-\s]/g, '')
  if (newRegEx.test(purgedName)) {
    return true
  }
  return false
}


  ngOnInit(): void {
    console.log(this.contractModel);
    this.customerService.findAll()
      .subscribe(
        data => {
          this.customers= data;
          //this.itemsCopy=data;
          console.log(data);
          data.forEach(element => {
            this.items.push(element.cin)
          });
          console.log(this.items);
         
        },
        error => {
          console.log(error);
     });
     this.offerService.findAll()
     .subscribe(
       data=>{
         this.offers=data;
         console.log(data);
       },
       error=>{
         console.log(error);
       }
     );
     this.phoneNumberService.findFreePhoneNumbers()
     .subscribe(
       data=>{
         this.phone_numbers=data;
         console.log(data);
       },
       error=>{
         console.log(error);
       }
     );

     //find all markets
     this.marketService.findAll()
     .subscribe(
       data=>{
         this.markets=data;
         console.log(data);
       },
       error=>{
         console.log(error);
       }
     );
  }
  

}
