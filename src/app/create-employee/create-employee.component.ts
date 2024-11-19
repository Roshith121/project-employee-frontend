import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(
    private employeesService: EmployeesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveEmployee() {
    this.employeesService.createEmployee(this.employee).subscribe(
      (data) => {
        console.log('Data submitted');
        this.goToEmployeeList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }
  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
