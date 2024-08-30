import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  private apiUrl = 'http://localhost:8080/getEmpList';

  constructor(private http: HttpClient) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }




 
}
