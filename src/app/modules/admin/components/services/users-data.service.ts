import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Employee } from 'src/app/employee';
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  
     url =" https://jsonplaceholder.typicode.com/todos";
     url1 =   'http://localhost:3000/Employee';
     rest: any;

  constructor(private http:HttpClient) { }
  users()
  {
    return this.http.get(this.url);
  }
  getEmployee() {
    return this.http.get<Employee[]>(this.url1);  /* comment sample */
  }
} 
