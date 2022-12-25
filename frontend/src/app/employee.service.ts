import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = 'https://employee-manager-spring.herokuapp.com/api/v1/employees';
  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`)
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post<Employee>(`${this.baseURL}`, employee)
  }

  getEmployeeById(id: Number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: Number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, employee)
  }

  deleteEmployee(id: Number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
