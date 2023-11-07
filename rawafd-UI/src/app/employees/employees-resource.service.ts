import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesResourceService {

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
		return this.http.get<Employee[]>(`${environment.employeesApiBaseUrl}/employees`);
	}

  getEmployeeById(employeeId: number): Observable<Employee> {
		return this.http.get<Employee>(`${environment.employeesApiBaseUrl}/employees/${employeeId}`);
	}

  addEmployee(employee: Employee): Observable<Employee> {
		return this.http.post<Employee>(`${environment.employeesApiBaseUrl}/employees`, employee);
	}

  updateEmployee(employee: Employee): Observable<Employee> {
		return this.http.put<Employee>(`${environment.employeesApiBaseUrl}/employees`, employee);
	}

  deleteEmployee(employeeId: number): Observable<void> {
		return this.http.delete<void>(`${environment.employeesApiBaseUrl}/employees/${employeeId}`);
	}
  
}
