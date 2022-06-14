import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/11header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { CourseComponent } from './components/course/course.component';
import { ApiComponent } from './components/api/api.component';
import { CombComponent } from './components/comb/comb.component';
import { EmployeeloadmoreComponent } from './components/employeeloadmore/employeeloadmore.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RuffComponent } from './components/ruff/ruff.component';
import { TodoComponent } from './components/todo/todo.component';
import { AdminDashbord1Component } from './components/admin-dashbord1/admin-dashbord1.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SeterComponent } from './components/com.b-geter/seter/seter.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CourseComponent,
    ApiComponent,
    CombComponent,
    EmployeeloadmoreComponent,
    RegistrationComponent,
    RuffComponent,
    TodoComponent,
    AdminDashbord1Component,
    SeterComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ConfirmationPopoverModule.forRoot({focusButton: 'danger'}),
    FormsModule,
    //Ng4LoadingSpinnerModule.forRoot()
    NgxSpinnerModule,
    MatSnackBarModule,
    MatIconModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AdminModule { }
