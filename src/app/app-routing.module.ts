import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  // {
  //   path : '',
  //   redirectTo :  'employee-test',
  //   pathMatch : 'full'
  // }, 
  // {
  //   path : 'employee-test',
  //   component : EmployeeComponent 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
