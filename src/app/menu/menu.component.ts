import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  welcomeMessage = 'Test';
  isLoggedIn :boolean;

  constructor() { }
  logout() {
    sessionStorage.removeItem('authenticatedUser');
    
  }

  ngOnInit() {
     console.log(sessionStorage.getItem('authenticatedUser'));
     if(sessionStorage.getItem('authenticatedUser')){
       this.isLoggedIn=true;

     }else{
       this.isLoggedIn=false;
     }
     console.log(this.isLoggedIn);
  }

}
