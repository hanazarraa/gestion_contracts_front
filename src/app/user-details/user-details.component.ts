import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';
import { User } from '../model/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user:any;
  userid=null;
  constructor(private router:Router,private route:ActivatedRoute,
    private userService:UserServiceService) { 
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
   
      
  
  list(){
    this.router.navigate(['/users']);

  }

}
