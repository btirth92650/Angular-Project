import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employeeloadmore',
  templateUrl: './employeeloadmore.component.html',
  styleUrls: ['./employeeloadmore.component.css']
})
export class EmployeeloadmoreComponent implements OnInit {

  constructor() { }
  result:string = '';
  isLoading!: boolean ;
  isLoadings!: boolean ;

  ngOnInit(): void {
  }

  save(event:any): void{
    var selectFile = event.target.files;
    for(var i = 0; i < selectFile.length; i++){
    this.result += 'File Name:'+selectFile[i].name;
    this.result += '<br> File Size (byte):'+selectFile[i].size;
    this.result += '<br> File Type:' +selectFile[i].type;
    this.result += '<br>------------------------';
  }
  }


  employee = [
    {
       name: "Bhalani Tirth",    //ctr+k+c comment shortcut select and then after key press all file in use 
      age: "20",                 // like tsfile htmlfile cssfile and uncommet key ctr+k+u 
      email: "tirth@gmail.com",
      qualification: ["BCA","MCA"],
      salary: 50000,
    },

    {
      name: "Bhalodiya Abhi",
      age: "21",
      email: "abhi@gmail.com",
      qualification: ["BCA","MCA"],
      salary: 45000,
    },
    {
      name: "Amrutiya Shruti",
      age: "22",
      email: "shruti@gmail.com",
      qualification: ["BCA","MCA"],
      salary: 30000,
    },
    {
      name: "Kasundra Mitul",
      age: "23",
      email: "mitul@gmail.com",
      qualification: ["BCA","MCA"],
      salary: 35000,
    },

  ]
  LoadMoreEmployee(): void {
         this.isLoading = true;
     setTimeout(() => {

    this.employee = [
      {
        name: "Bhalani Tirth",
        age: "20",
        email: "tirth@gmail.com",
        qualification:["BCA","MCA"],
        salary: 50000,
      },

      {
        name: "Bhalodiya Abhi",
        age: "21",
        email: "abhi@gmail.com",
        qualification: ["BCA","MCA"],
        salary: 45000,
      },
      {
        name: "Amrutiya Shruti",
        age: "22",
        email: "shruti@gmail.com",
        qualification: ["BCA","MCA"],
        salary: 30000,
      },
      {
        name: "Kasundra Mitul",
        age: "23",
        email: "mitul@gmail.com",
        qualification: ["BCA","MCA"],
        salary: 35000,
      },
      {
        name: "Mendapara Sanket",
        age: "27",
        email: "sanket@gmail.com",
        qualification: ["BCA","MCA"],
        salary: 65000,
      },
      {
        name: "Padaliya Palak",
        age: "20",
        email: "palak@gmail.com",
        qualification: ["BCA","MCA"],
        salary: 25000,
      },
      {
        name: "Patel Sunny ",
        age: "24",
        email: "sunny@gmail.com",
        qualification: ["BCA","MCA"],
        salary: 36000,
      },
      {
        name: "Vidaja Punit",
        age: "23",
        email: "punit@gmail.com",
        qualification: ["BCA","MCA"],
        salary: 38000,
      },
      {
        name: "Dhingani Harshil",
        age: "25",
        email: "harshil@gmail.com",
        qualification: ["BCA","MCA"],
        salary: 60000,
      },
    ]
       this.isLoading = false;
      }, 1000)

  }
  LoadLessEmployee():void{
    this.isLoadings = true;
     setTimeout(() => {

    this.employee = [
      {
        name: "Bhalani Tirth",
        age: "20",
        email: "tirth@gmail.com",
        qualification: ["BCA","MCA"],
        salary: 50000,
      },

      {
        name: "Bhalodiya Abhi",
        age: "21",
        email: "abhi@gmail.com",
        qualification: ["BCA","MCA"],
        salary: 45000,
      },
      {
        name: "Amrutiya Shruti",
        age: "22",
        email: "shruti@gmail.com",
        qualification: ["BCA","MCA"],
        salary: 30000,
      },
      {
        name: "Kasundra Mitul",
        age: "23",
        email: "mitul@gmail.com",
        qualification: ["BCA","MCA"],
        salary: 35000,
      },  
        
    ]
    this.isLoadings = false;
      }, 1000)
    }
    getEmployeeusingTrackBy(index:number,employee:any):string{
      return employee.name;
    }
  }



