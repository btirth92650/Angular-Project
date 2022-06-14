import { Observable, of, throwError, } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

//import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
   constructor(private router: Router,private spinner: NgxSpinnerService ) { }           

   isLoading!: boolean ;


  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    // this.spinner.show();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 5000);
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
       }, 1000)

    localStorage.removeItem('token');
    this.router.navigate(['login']);


  }

  login({ email, password }: any): Observable<any> {
    if (email === 'tirth99@gmail.com' && password === 'Tirth@1433') {
      this.setToken('abcdefghijklmnopqrstuvwxyz123..123');
      return of({ name: 'Bhalani Tirth', email: 'tirth99@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }
}
