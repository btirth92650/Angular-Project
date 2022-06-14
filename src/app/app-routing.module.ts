import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path: 'forgot-password',component:ForgotPasswordComponent},
  {path: '',redirectTo:'/login',pathMatch:'full'},
  {path: 'admin',
  canActivate: [AuthGuard],
   loadChildren: ()=> 
   import('./modules/admin/admin.module').then((m)=>m.AdminModule)
  },
  {path: '**',component:NotFoundComponent},


]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
