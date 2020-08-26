export class User {
    id: string;
    firstname:string;
    lastname:string;
    username: string;
    password: string;
    User(firstname,lastname,username){
        this.firstname=firstname;
        this.lastname=lastname;
        this.username=username;
    }
    
}