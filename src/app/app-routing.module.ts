import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UsersListComponent } from './users-list/users-list.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { ContractCreateComponent } from './contract-create/contract-create.component';
import { ContractListComponent } from './contract-list/contract-list.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'users', component: UsersListComponent},
  {path: 'users/:id', component: UserDetailsComponent},
  {path: 'users/update/:id', component: UserUpdateComponent},
  {path: 'customers', component: CustomersListComponent},
  {path: 'customers/create', component: CustomerCreateComponent},
  {path: 'customers/details/:id', component: CustomerDetailsComponent},
  {path: 'customers/update/:id', component: CustomerUpdateComponent},
  {path: 'contracts/create', component: ContractCreateComponent},
  {path :'contracts',component:ContractListComponent},

  {  path: '',
  redirectTo: '/login',
  pathMatch: 'full'},

  {path: 'hello', component: HelloWorldComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
