import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { Customer } from '../model/Customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  customerModel=new Customer();

  constructor(  private route: ActivatedRoute,
    private router: Router,
    private customerService:CustomerService,
   ) { 
  /*  if (this.authenticationService.isUserLoggedIn) {
      this.router.navigate(['/hello-world']);
  }*/
}

   
     // Validators.pattern('^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')*/

  ngOnInit(): void {
   /* this.form=new FormGroup({
      'fname':new FormControl('',[ Validators.compose([
        Validators.required,
    ])]),
    'lastname':new FormControl('',[ Validators.compose([
      Validators.required,
  ])]),
      //'password':new FormControl('',[Validators.required,Validators.minLength(6)]),
    });*/
  }
  //get f() { return this.form.controls; }
  onSubmit(form) {
    console.log(this.customerModel);
    this.submitted = true;

    // reset alerts on submit
    //this.alertService.clear();

    // stop here if form is invalid
   /* if (this.registerForm.invalid) {
        return;
    }*/

    this.loading = true;
    this.customerService.save(this.customerModel)
      //  .pipe(first())
        .subscribe(
            data => {
              console.log(data);
              //  this.alertService.success('Registration successful', true);
                this.router.navigate(['/customers']);
            },
            error => {
              console.log(error);
               // this.alertService.error(error);
                this.loading = false;
            });
}
}


