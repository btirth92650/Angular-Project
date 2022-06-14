import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import readXlsxFile from 'read-excel-file'


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  course=[
    {'id':1.,'name':'.Learn Angular','discription':'lorem Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged','image':' ../../assets/angular.png' },
    {'id':2.,'name':'.Learn Node.js','discription':'lorem Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged','image':' ../../assets/node.jpg' },
    {'id':3.,'name':'.Learn React.js','discription':'lorem Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged','image':' ../../assets/react.jpg' },
    {'id':4.,'name':'.Learn Typescript','discription':'lorem Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged','image':' ../../assets/typescript1.jpg' }
  ]

  studentRecords:any=[];
  excelRead(event){
    let filereded:any;
    filereded = event.target.files[0];
    let type = event.target.files[0].name.split('.').pop();
    this.studentRecords=[];
    const schema ={
      'ID': {
        prop:'id',
        type: String,
        required: false
      },
      'Name':{
        prop:'name',
        type: String,
        required: false
      },
      'Course':{
        prop:'course',
        type: String,
        required: false
      },
    };
    readXlsxFile(event.target.files[0],{schema}).then((data)=>{
 if(data.rows)
 {
   for(let i of data.rows)
   {
     this.studentRecords.push(i);
   }
 }
      console.log(this.studentRecords);
    }) 
  }
}
  