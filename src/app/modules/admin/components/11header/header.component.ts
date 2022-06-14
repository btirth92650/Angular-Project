import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  { 
  isLoading: boolean = false;
  constructor(private auth: AuthService, private spinner: NgxSpinnerService ) { }

  ngOnInit(): void { }
  logout  ()
  {

    // alert("Are you sure you want to logout!")
     this.spinner.show();
     setTimeout(() => {
      this.auth.logout()
       this.spinner.hide();
     }, 3000); 
    

    // this.isLoading = true;

    //      setTimeout(() => {
    //       this.auth.logout()

    //     this.isLoading = false;
    //      }, 2000)
     };
  }
function Input() {
  throw new Error('Function not implemented.');
}

