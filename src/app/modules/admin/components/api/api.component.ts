import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
    users:any;
  constructor(private UserData:UsersDataService) {
    UserData.users().subscribe((data)=>{
      console.warn("data",data);
      this.users=data
    });
  }
   
  ngOnInit(): void {
  }

}
