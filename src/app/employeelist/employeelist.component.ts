import { Component } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { Employee } from '../model/Employee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {

  employees:Employee[] = [];

  constructor(private employeeService: EmployeeserviceService) { }

  ngOnInit(): void {
    this.employeeService.getEmployeeList().subscribe((data: Employee[]) => {
      this.employees = data;
    });

  }
  
}
