import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
// import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderByPipe } from './order-by.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { NgxPaginationModule} from 'ngx-pagination';
//import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    OrderByPipe,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //ConfirmationPopoverModule.forRoot({focusButton: 'danger'}),
    RouterModule,
    //  NgxPaginationModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,


    //  FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})

export class AppModule { }
