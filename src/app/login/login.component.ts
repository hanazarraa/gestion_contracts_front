import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted:boolean;
  username: string;
  password : string;
  form: FormGroup;

  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  userModel=new User();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService:AuthenticationService
     ) {   }

  ngOnInit() {
    console.log(sessionStorage.getItem('authenticatedUser'));
    this.form=new FormGroup({
      'username':new FormControl('',[ Validators.compose([
        Validators.required,
        Validators.pattern('^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')])]),
      'password':new FormControl('',[Validators.required,Validators.minLength(6)]),
    });
  }
  save() {
   console.log(this.userModel);

      this.authenticationService.LoginUser(this.userModel).subscribe((res)=>{
        console.log(res.result);
        //console.log(this.form.value);
        if (res.result) {
          this.form.reset()
          console.log('error',res);
        }else{
          console.log('succes',res);
         // localStorage.setItem('token',res.token);
          //localStorage.setItem('username',res.user.username);
         // localStorage.setItem('user', JSON.stringify({login : res.user.username}));
          console.log(localStorage);
         // this.router.navigateByUrl('dashbord');
        }
      })
    
    this.router.navigate(['/users']);

    /*this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();*/
  }
  onSubmit(form:FormGroup) {
    this.submitted = true;
    this.save();    
  }
  handleLogin(fom:FormGroup) {
   console.log(this.userModel);

   console.log(this.userModel.username);
    this.authenticationService.authenticationService(this.userModel).subscribe((result)=> {
      console.log(result);
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
     this.authenticationService.registerSuccessfulLogin(this.userModel.username,this.userModel.password);
      //localStorage.setItem('user', JSON.stringify({login : result.user.username}));
      this.router.navigate(['/hello']);
    }, () => {
      this.invalidLogin = true;
     // console.log(result);
      this.loginSuccess = false;
    });      
  }
}