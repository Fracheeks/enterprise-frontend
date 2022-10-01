import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {employee} from './employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL ='http://localhost:9090/users'
  constructor(private httpClient : HttpClient) { }

  getEmployeeList(): Observable<employee[]>{
    return this.httpClient.get<employee[]>(this.baseURL);
  }

  createEmployee(employee: employee): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<employee>{
    return this.httpClient.get<employee>(`${this.baseURL}/${id}`);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
