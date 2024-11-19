import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  id!: number;
  constructor(
    private employeesService: EmployeesService,
    private routes: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.routes.snapshot.params['id'];
    this.employeesService.getEmployeeById(this.id).subscribe(
      (data) => {
        this.employee = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    console.log(this.employee);
    this.employeesService.updateEmployee(this.id, this.employee).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
    this.goToEmployeeList();
  }
  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
