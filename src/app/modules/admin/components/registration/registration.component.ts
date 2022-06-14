import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  constructor() { }
  model: any
  ngOnInit(): void {
  }

  details = {
    Fname: "",
    Lname: "",
    Email: "",
    Password: "",
    phone1: "",
    phone2: "",
    age: "",
  }
  


  setValue(event) {
    const keyname = event.target.name;
    const value = event.target.value;
    this.details[keyname] = value;
  }

  submitData() { 

    for (const key in this.details) {
      const val = this.details[key];
      if (val.trim().length == 0) {
        alert('fiels must not be blank');
        return;
      }
    }
    console.log(this.details)
  }


  // // resetForm() {
  // //   this.details = {
  // //     Fname: "",
  // //     Lname: "",
  // //     Email: "",
  // //     Password: "",
  // //     phone1: "",
  // //     phone2: "",
  // //     age: "",
  // //   }

  // }
  /*myEvent(val:any){
    alert(val);
  } */


  show = false;
  toggle() {
    this.show = !this.show;
  }
}

