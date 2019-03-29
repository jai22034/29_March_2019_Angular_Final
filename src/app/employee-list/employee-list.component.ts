import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employee = [];

  constructor(private employeeservice: EmployeeService) { }

  ngOnInit() {
    this.employeeservice.getEmployees().subscribe((data) => {
      Object.keys(data).forEach((key) => {
        this.employee.push(data[key])
      });
    });


  }

  onSubmit(employeeform: NgForm) {

    this.employeeservice.setEmployee(employeeform.value).subscribe((res) => {
      console.log(res);
    })

  }

}

