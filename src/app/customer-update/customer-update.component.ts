import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/Customer';
import { FormGroup } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  customerid=null;
  customer:any;
  customerModel:Customer;
  form: FormGroup;
  successMessage:string;
  formatted:string;
  submitted:boolean;
  updateSuccess:boolean;
  errorMessage:string;
  onSubmit(form){
    this.submitted=true;
    console.log(this.customer);
    this.customerService.updateCustomer(this.customerid,this.customer)
      .subscribe(data => {
        this.updateSuccess=true;
        this.successMessage = 'Customer updated successfully';
        console.log(this.updateSuccess);
       // location.reload();
        //console.log(data)
       /* this.user = data;
        
        console.log(this.user);*/
      }, error => {console.log(error);
        this.updateSuccess=false;
        this.errorMessage="fail to edit the customer";
        //location.reload();
      }
      );
      //console.log("hana");
      
      //this.router.navigate(['/customers']);
     
    //this.updateUser(this.id,this.userModel):Observable<any>{
  }
    constructor(private customerService:CustomerService,private router:Router,private route:ActivatedRoute,private datePipe: DatePipe) { 
      this.customerid = this.route.snapshot.paramMap.get('id');
  
      console.log("id ",this.customerid);
    }
  
    ngOnInit(): void {
      this.submitted=false;
      this.customerService.getCustomerById(this.customerid)
      .subscribe(data => {
        this.customer = data;
        this.formatted =this.datePipe.transform(this.customer.birthdate,"yyyy-MM-dd");
        console.log(this.formatted);

        
       // console.log(this.customer);
      }, error => console.log(error));
      
    }
    list(){
      this.router.navigate(['customers']);
    }
  
  }
  
