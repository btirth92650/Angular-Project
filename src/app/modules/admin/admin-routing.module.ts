import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminDashbord1Component } from './components/admin-dashbord1/admin-dashbord1.component';
import { ApiComponent } from './components/api/api.component';
import { CombComponent } from './components/comb/comb.component';
import { CourseComponent } from './components/course/course.component';
import { EmployeeloadmoreComponent } from './components/employeeloadmore/employeeloadmore.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RuffComponent } from './components/ruff/ruff.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  {
    path: '', component: AdminDashbord1Component,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'course', component: CourseComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'about', component: AboutComponent },
      { path: 'todo', component: TodoComponent },
      { path: 'ruff', component: RuffComponent },
      { path: 'employeeloadmore', component: EmployeeloadmoreComponent },
      { path: 'api', component: ApiComponent },
      { path: 'comb', component: CombComponent },
      { path: '',redirectTo:'/admin/home',pathMatch:'full'},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
