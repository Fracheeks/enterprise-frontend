import { Component, OnInit } from '@angular/core';
import { employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: employee = new employee();
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( {
      next: (data) => console.log(data),
      complete: () => this.goToEmployeeList()
    })
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

    onSubmit(){
      console.log(this.employee);
      this.saveEmployee();
    }
  
}
