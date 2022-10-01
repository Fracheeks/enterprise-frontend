import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DeniedComponent } from './denied/denied.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './services/auth-guard.service';
const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent, canActivate : [AuthGuardService]},
  {path: "create-employee", component: CreateEmployeeComponent, canActivate : [AuthGuardService]},
  {path: '', redirectTo: 'auth-callback', pathMatch: 'full'},
  {path: 'auth-callback',component: AuthCallbackComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  {path: 'denied', component: DeniedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
