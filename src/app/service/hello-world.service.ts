import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../model/Message';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

    constructor(private http: HttpClient) {
    }
    executeHelloWorldService() {
        return this.http.get<Message>('http://localhost:8080/hello-world/api/v1/greeting');
    }
   }

