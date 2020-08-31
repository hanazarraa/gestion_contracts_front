import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldService } from './service/hello-world.service';
import { UsersListComponent } from './users-list/users-list.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { DatePipe } from '@angular/common';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ContractCreateComponent } from './contract-create/contract-create.component';
import { SliderComponent } from './slider/slider.component';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    HelloWorldComponent,
    UsersListComponent,
    RegisterComponent,
    FooterComponent,
    UserDetailsComponent,
    UserUpdateComponent,
    CustomersListComponent,
    CustomerCreateComponent,
    CustomerDetailsComponent,
    CustomerUpdateComponent,
    CustomerSearchComponent,
    ContractCreateComponent,
    SliderComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxMatSelectSearchModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatSelectModule,

    NgSelectModule


  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
    },
    DatePipe,
    HelloWorldService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
