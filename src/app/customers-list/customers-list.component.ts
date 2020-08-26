import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/Customer';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
searchText:string;
  customers: any;
  firstname=null;
  constructor(
    private router: Router,
    private customerService:CustomerService) {}

  ngOnInit() {
  //location.reload(); 
    this.reloadData();
   // location.reload();
  }
  search() {
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

  }

  reloadData() {
    this.customerService.findAll()
      .subscribe(
        data => {
          this.customers= data;
          console.log(data);
         // location.reload();
        },
        error => {
          console.log(error);
        });
  
  }
  customerUpdate(id:any){
    console.log(id);
    this.router.navigate(['customers/update', id]);

  }
  addCustomer(){
    this.router.navigate(['customers/create']);
  }
  customerDelete(id:any){
    this.customerService.deleteCustomer(id)
    .subscribe(data => {
      console.log("deleted");
      location.reload();
     /* this.user = data;
      
      console.log(this.user);*/
    }, error => console.log(error));
   // location.reload(); 

    /*this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.reloadData();
    });*/
         //this.router.navigate(['/users']);
  }
  customerDetails(id: any){
    console.log(id);
    this.router.navigate(['customers/details', id]);
  }

 




}
