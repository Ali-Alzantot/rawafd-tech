import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Employee } from 'src/app/models/employee';
import { EmployeesResourceService } from '../employees-resource.service';

@Component({
  selector: 'app-add-update-employee',
  templateUrl: './add-update-employee.component.html',
  styleUrls: ['./add-update-employee.component.scss']
})
export class AddUpdateEmployeeComponent {
  employee: Employee = {};
  isAdd: boolean = true;
  selectedEmployeeId?: number;

  constructor(private router: Router, private employeesResourceService: EmployeesResourceService
    , private messageService: MessageService, private activeRouter: ActivatedRoute) {
    this.activeRouter.params.subscribe(params => {
      this.selectedEmployeeId = params['employeeId'];
      if (this.selectedEmployeeId) {
        this.isAdd = false;
        this.getEmployeeToUpdate();
      }
    });
  }

  getEmployeeToUpdate() {
    this.employeesResourceService.getEmployeeById(this.selectedEmployeeId!)
      .subscribe(employee => {
        this.employee = employee;
      }, error => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Error while getting employee to update"
        });
      });

  }

  saveEmployee() {
    if (this.isAdd) {
      this.addEmployee();
    } else {
      this.updateEmployee();
    }
  }

  addEmployee(): void {
    this.employeesResourceService.addEmployee(this.employee)
      .subscribe(employee => {
        this.messageService.add({
          severity: "success",
          summary: "success",
          detail: "employee added succefully"
        });
        this.router.navigate(["employees"]);
      }, error => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Error while adding employee"
        });
      });
  }

  updateEmployee(): void {
    this.employeesResourceService.updateEmployee(this.employee)
      .subscribe(employee => {
        this.messageService.add({
          severity: "success",
          summary: "success",
          detail: "employee updated succefully"
        });
        this.router.navigate(["employees"]);
      }, error => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Error while updating the employee"
        });
      });
  }

}
