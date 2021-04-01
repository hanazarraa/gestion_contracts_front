import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import  {Contract}  from '../model/Contract';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { OfferService } from '../service/offer.service';
import { error } from 'protractor';
import { PhoneNumberService } from '../service/phone-number.service';
import { MarketService } from '../service/market.service';
import { ContractService } from '../service/contract.service';
import { ContractPhoneNumber } from '../model/ContractPhoneNumber';
import { ContractPhonenumberService } from '../service/contract-phonenumber.service';
import { Observable } from 'rxjs';
import { PhoneNumber } from '../model/PhoneNumber';
import { ServiceService } from '../service/service.service';

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
   checkArray:any;
   services:any;
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
   fname:any;
  current = 0;
  prev = -1;
  offerServiceModel:OfferService;
  getCustomer(){
    console.log(this.contractModel.customer);
     
  }
  getFname(){
    console.log(this.contractModel.customer);
  }
  recherche(){
    console.log(this.contractModel.customer.fname);
  }
  onSubmit(form:FormGroup){
    /*console.log( this.contractForm.value.checkArray);
    this.contractForm.value.checkArray.forEach(function(s){
      this.serviceService.getServiceById(s)
      .subscribe(data=>{
        this.offerServiceModel.service=data;
        this.offerServiceModel.offer=this.contractModel.offer;


      });
        
      });*/
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
            this.router.navigate(['/contracts']);
          },error=>{
            console.log(error);
          }
        )
      },
      error=>{
        console.log(error);
      });

    

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
   console.log(this.contractModel.market);
   console.log(this.contractModel.market.offers);
   /* this.offerService.findByMarket(this.contractModel.market)
                      .subscribe(
                       data=>{
                          this.offers=data;
                          console.log(data);
                        },
                        error=>{
                          console.log(error);
                        }
                      );*/

    //this.offersMarket=this.contractModel.market.offers;
  }
  changeMarket(value){
    console.log(value);
  }

  isLeftTransition(idx: number): boolean {
    return this.current === idx ? this.prev > this.current : this.prev < this.current;
  }
 constructor(  private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private customerService:CustomerService,
    private offerService :OfferService,
    private phoneNumberService:PhoneNumberService,
    private marketService:MarketService,
    private contractService:ContractService,
    private contractPhoneNumberService:ContractPhonenumberService,
    private serviceService:ServiceService
    
   ) { 
    this.contractForm = this.fb.group({
      checkArray: this.fb.array([]),
    });

 
}
onCheckboxChange(e) {
  const checkArray: FormArray = this.contractForm.get('checkArray') as FormArray;

  if (e.target.checked) {
   // console.log(e.target.value);
    checkArray.push(new FormControl(e.target.value));
  } else {
    let i: number = 0;
    checkArray.controls.forEach((item: FormControl) => {
      if (item.value == e.target.value) {
        checkArray.removeAt(i);
        return;
      }
      i++;
    });
  }
  //console.log(checkArray.value);
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
getOffer(){
  console.log(this.contractModel.offer);
    this.serviceService.findServicesByOffer(this.contractModel.offer.id)
    .subscribe(data =>{
       this.services=data;
      console.log(data);
   },
       error=>{
       console.log(error);
    });
  
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
