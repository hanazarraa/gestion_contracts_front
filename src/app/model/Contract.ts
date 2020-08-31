import { PhoneNumber } from './PhoneNumber';
import Offer from './Offer';
import Customer from './Customer';
import Market from './Marke';
import { ContractPhoneNumber } from './ContractPhoneNumber';
export  class Contract {
    id: string;
    customer: Customer;
    status:boolean;
    offer:Offer;
    market:Market;
    contractsphonenumbers: [ContractPhoneNumber];
    /*Contract(customer,status,offer,market,phone_numbers){
        this.customer=customer;
        this.status=status;
        this.offer=offer;
        this.market=market;
        this.phone_numbers=phone_numbers;
    }*/
   
}