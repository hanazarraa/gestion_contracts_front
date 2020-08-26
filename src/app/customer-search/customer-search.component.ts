import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent implements OnInit {
  firstname:string;
  searchText:string;
  customers: Observable<any[]>;
  constructor(private customerService:CustomerService,private route:ActivatedRoute) { 
    this.firstname = this.route.snapshot.paramMap.get('fname');

  }

  ngOnInit(): void {

    console.log(this.firstname);
    this.customerService.findByFname(this.firstname)
      .subscribe(
        data => {
          this.customers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  

}
