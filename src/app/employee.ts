export class Employee {
    id: number;
    fullname: string;   
    age: number;
    gender: string;
    email: string;
    salary: number;
    qualification: string;

    constructor(  id ,fullname,age,gender,email,salary,qualification){
       this.id=id; 
       this.fullname=fullname;
       this.age=age;
       this.gender=gender;
       this.email=email; 
       this.salary=salary; 
       this.qualification=qualification;
       
    }
}
