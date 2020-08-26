import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserServiceService } from '../service/user-service.service';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { AuthenticationService } from '../login/auth.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private authService: AuthenticationService,
    private router: Router,
    private userService:UserServiceService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.users = this.authService.getUsersList();
  }
  userUpdate(id:any){
    console.log(id);
    this.router.navigate(['users/update', id]);

  }
  userDelete(id:any){
    this.userService.deleteUser(id)
    .subscribe(data => {
      console.log("deleted")
     /* this.user = data;
      
      console.log(this.user);*/
    }, error => console.log(error));
    location.reload(); 

    /*this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.reloadData();
    });*/
         //this.router.navigate(['/users']);
  }
  userDetails(id: any){
    console.log(id);
    this.router.navigate(['users', id]);
  }

 

}
