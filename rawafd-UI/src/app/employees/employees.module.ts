import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { AddUpdateEmployeeComponent } from './add-update-employee/add-update-employee.component';
import { PrimeComponentsModule } from '../prime-module/prime-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListEmployeesComponent,
    AddUpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    PrimeComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
		CommonModule,
		PrimeComponentsModule,
    FormsModule,
    ReactiveFormsModule
	]
})
export class EmployeesModule { }
