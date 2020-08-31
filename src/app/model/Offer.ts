import Market from './Marke';
import { Contract } from './Contract';

export default class Offer {
    id: string;
    market:Market;
    offerDescription:string;
    contracts:[Contract];
   
}