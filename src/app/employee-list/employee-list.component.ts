import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees!: Employee[];
  constructor(
    private employeesService: EmployeesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeesService.getEmployeeList().subscribe(
      (data) => {
        this.employees = data;
        console.log('data is running');
      },
      (error) => {
        this.employees = error;
        console.log('data is not running');
      }
    );
  }
  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number) {
    this.employeesService.deleteEmployee(id).subscribe(
      (data) => {
        this.getEmployees();
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  employeeDetails(id: number) {
    this.router.navigate(['employee-details', id]);
  }
}
