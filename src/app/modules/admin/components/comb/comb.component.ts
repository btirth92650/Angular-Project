import { Component, OnInit } from '@angular/core';

export class Department {
  name!: string;
  depId!: number;             //THIS IS CALLED INTERFACE  THIS ALL ABOVE CONSTRUCTUR
  teachers?: string[];

}


@Component({
  selector: 'app-comb',
  templateUrl: './comb.component.html',
  styleUrls: ['./comb.component.css']
})
export class CombComponent implements OnInit {
  keyupCounter!:number
  teacher!:string
  constructor() { }

  ngOnInit(): void {
  }
  name: string = 'tirth';
  /*name and sal called variable*/
  sal: number = 25000;

  show(): string {         /* this was display by html use function show() */
    return this.name + '--' + this.sal     /* name and sal variable created */
  }

  text = "";
  setText(event) {
    const val = event.target.value;
    this.text = val;
  }

  textsize = 15;
  /*setSize(operation){
    if(operation == 'inc'){
      this.textsize += 1;
    }
    else{
      this.textsize -= 1;
    }
  }*/
  setSize(event) {
    const val = event.target.value;
    this.textsize = val;

  }

  textCls = "";
  setColor(event) {
    const val = event.target.value;
    this.textCls = val
  }

  person = {
    name: "",
    email: "",
    cmp: "",
    sal: "",
  };

  isDataSubmited = false;

  setValue(event) {
    const keyname = event.target.name;
    const value = event.target.value;
    this.person[keyname] = value;
  }

  submitData() {

    for (const key in this.person) {
      const val = this.person[key];
      if (val.trim().length == 0) {
        alert('fiels must not be blank');
        return;
      }
    }
    this.isDataSubmited = true;
    console.log(this.person);
  }

  resetForm() {
    this.person = {
      name: "",
      email: "",
      cmp: "",
      sal: "",
    };

    this.isDataSubmited = false;

  }



  public departments = [
    {
      name: "CSE",
      depId: 12
    },
    {
      name: "EEE",
      depId: 13
    },
    {
      name: "XYZ",
      depId: 14
    },

  ];

  public selectedDep!: Department;

  onDepartmentChange(depIndex: string) {
    this.selectedDep = this.departments[+depIndex]
  }
}
