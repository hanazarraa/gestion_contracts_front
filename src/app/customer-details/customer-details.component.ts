import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer:any;
  customerid=null;
  constructor(private router:Router,private route:ActivatedRoute,
    private customerService:CustomerService) { 
    this.customerid = this.route.snapshot.paramMap.get('id');
      console.log("id ",this.customerid);
  }

  ngOnInit(): void {
   this.customerService.getCustomerById(this.customerid)
    .subscribe(data => {
      console.log(data)
      this.customer = data;
      console.log(this.customer);
    }, error => console.log(error));
    
}
   
      
  
  list(){
    this.router.navigate(['/customers']);

  }
}
