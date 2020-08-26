import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../model/User';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../login/auth.service';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  userModel=new User();

  constructor(  private route: ActivatedRoute,
    private router: Router,
    private userService:UserServiceService,
    private authenticationService:AuthenticationService
   ) { 
     console.log(sessionStorage.getItem('authenticatedUser'));
  /*  if (this.authenticationService.isUserLoggedIn) {
      this.router.navigate(['/hello-world']);
  }*/
}

   

  ngOnInit(): void {
    this.registerForm=new FormGroup({
      'username':new FormControl('',[ Validators.compose([
        Validators.required,
        Validators.pattern('^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')])]),
      'password':new FormControl('',[Validators.required,Validators.minLength(6)]),
    });
  }
  get f() { return this.registerForm.controls; }
  onSubmit(registerForm:FormGroup) {
    console.log(this.userModel);
    this.submitted = true;

    // reset alerts on submit
    //this.alertService.clear();

    // stop here if form is invalid
   /* if (this.registerForm.invalid) {
        return;
    }*/

    this.loading = true;
    this.userService.register(this.userModel)
      //  .pipe(first())
        .subscribe(
            data => {
              console.log(data);
              //  this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
              console.log(error);
               // this.alertService.error(error);
                this.loading = false;
            });
}
  

}
