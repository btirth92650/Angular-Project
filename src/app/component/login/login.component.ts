import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,  FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //  public logInForm!: FormGroup
  //  email!: string;
  //  password!: string;

  // public showPassword: boolean = false;

  // public togglePasswordVisibility(): void {
  //   this.showPassword = !this.showPassword;
  // }


  loginForm = new FormGroup({ email: new FormControl(''), password: new FormControl(''), });

  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) { }
  public loading!: boolean 

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin'])
    }
    //  this.logInForm = this.formBuilder.group({
    //    email: [''],
    //    password: ['']
    //  })
  }
  // // logInUser(){
  // //   this.logInForm
  // //   if(this.email =="tirthpatel1433@gmail.com" && this.password =="Tirth@1433"){
  // //     alert("Login Success");
  // //     this.logInForm.reset();
  // //     this.router.navigate(['home'])
  // //    // this.router.navigate(['course'])
  // //   }
  // //   else{
  // //     alert("User not found");
  // //   }
  // // }
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {  
         this.loading = true; 
         setTimeout(() => {
          this.router.navigate(['admin'])
          this.loading = false;
           }, 4000)
        },
        (err: Error) => { 
          alert(err.message);
        }
      );
    }
  }
}
