import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../model/User';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
userid=null;
user:any;
userModel:User;
form: FormGroup;

onSubmit(form){
  console.log(this.user);
  this.userService.updateUser(this.userid,this.user)
    .subscribe(data => {
      console.log(data)
     /* this.user = data;
      
      console.log(this.user);*/
    }, error => console.log(error));
    //console.log("hana");
    this.router.navigate(['/users']);
   
  //this.updateUser(this.id,this.userModel):Observable<any>{
}
  constructor(private userService:UserServiceService,private router:Router,private route:ActivatedRoute) { 
    this.userid = this.route.snapshot.paramMap.get('id');

    console.log("id ",this.userid);
  }

  ngOnInit(): void {
    this.userService.getUserById(this.userid)
    .subscribe(data => {
      console.log(data)
      this.user = data;
      
      console.log(this.user);
    }, error => console.log(error));
    
  }

}
