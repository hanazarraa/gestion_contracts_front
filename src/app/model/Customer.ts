import { Contract } from './Contract';

export default class Customer {
    id: string;
    fname:string;
    lastname:string;
    email: string;
    cin: string;
    address:string;
    birthdate:string;
    contracts:[Contract];
    /*Customer(firstname,lastname,email,cin,address,birthdate){
        this.fname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.cin=cin;
        this.address=address;
        this.birthdate=birthdate;
    }
    */
}