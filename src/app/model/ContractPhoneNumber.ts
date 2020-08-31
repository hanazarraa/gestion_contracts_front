import { PhoneNumber } from './PhoneNumber';
import Offer from './Offer';
import Customer from './Customer';
import Market from './Marke';
import { Contract } from './Contract';
export  class ContractPhoneNumber {
    id: string;
    contract: number;
    phoneNumber:string;
    date_activation:Date;
    /*Contract(customer,status,offer,market,phone_numbers){
        this.customer=customer;
        this.status=status;
        this.offer=offer;
        this.market=market;
        this.phone_numbers=phone_numbers;
    }*/
   
}