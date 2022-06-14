import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

//import { RestService } from '../rest.service';
import readXlsxFile from 'read-excel-file'
import { Employee } from 'src/app/employee';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-ruff',
  templateUrl: './ruff.component.html',
  styleUrls: ['./ruff.component.css']
})
export class RuffComponent implements OnInit {
  employee: Employee[] = [];

  constructor(public rs: UsersDataService, private http: HttpClient) { }
  firstName: any;
  ngOnInit(): void {
    this.rs.getEmployee().subscribe((response) => {
      this.employee = response;
    })
  }
  Search() {
    if (this.firstName == "") {
      this.ngOnInit();
    }
    else {
      this.employee = this.employee.filter(res => {
        return res.fullname.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      });
    }
  }
  studentRecord: any = [];
  excelRead(event) {
    let filereded: any;
    filereded = event.target.files[0];
    let type = event.target.files[0].name.split('.').pop();
    this.studentRecord = [];
    const schema = {
      'Sr No': {
        prop: 'id',
        type: String,
        required: false
      },
      'Name': {
        prop: 'name',
        type: String,
        required: false
      },
      'Age': {
        prop: 'age',
        type: String,
        required: false
      },
      'Gender': {
        prop: 'gender',
        type: String,
        required: false
      },
      'E-mail': {
        prop: 'email',
        type: String,
        required: false
      },
      'Salary': {
        prop: 'salary',
        type: String,
        required: false
      },
      'Qualification': {
        prop: 'qualification',
        type: String,
        required: false
      },
    };
    readXlsxFile(event.target.files[0], { schema }).then((data) => {
      if (data.rows) {
        for (let i of data.rows) {
          this.studentRecord.push(i);
        }
      }
      console.log(this.studentRecord);
    })
  }

}

