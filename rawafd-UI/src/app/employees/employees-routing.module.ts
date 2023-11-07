import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUpdateEmployeeComponent } from './add-update-employee/add-update-employee.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';

const routes: Routes = [
  {
    path: '',
    component: ListEmployeesComponent
  },
  {
    path: 'add',
    component: AddUpdateEmployeeComponent
  },
  {
    path: ':employeeId/update',
    component: AddUpdateEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
