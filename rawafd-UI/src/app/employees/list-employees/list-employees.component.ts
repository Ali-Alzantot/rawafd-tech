import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Employee } from 'src/app/models/employee';
import { EmployeesResourceService } from '../employees-resource.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent {
  employees: Employee[] = [];
  loading: boolean = true;

  constructor(private router: Router, private employeesResourceService: EmployeesResourceService
    , private messageService: MessageService, private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(): void {
    this.loading = true;
    this.employeesResourceService.getAllEmployees()
      .subscribe(employees => {
        this.employees = employees;
        this.loading = false;
      }, error => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Error while getting employees"
        });
        this.loading = false;
      });
  }

  goToAddEmployee() {
    this.router.navigate(["employees", "add"]);
  }

  goToUpdateEmployee(employee: Employee) {
    this.router.navigate(["employees", `${employee.id}`, "update"]);
  }

  confirmDelete(event: Event, employee: Employee): void {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.employeesResourceService.deleteEmployee(employee.id!)
          .subscribe(() => {
            this.messageService.add({
              severity: "success",
              summary: "success",
              detail: "employee delted successfully"
            });
            this.getAllEmployees();
          }, error => {
            this.messageService.add({
              severity: "error",
              summary: "Error",
              detail: "Error deleting employee"
            });
          });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }
}
