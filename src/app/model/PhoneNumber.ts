import { Contract } from './Contract';
import { ContractPhoneNumber } from './ContractPhoneNumber';

export class PhoneNumber {
    id: string;
    phonenumber:string;
    status:string;
    contractsphonenumbers:[ContractPhoneNumber];
   
}