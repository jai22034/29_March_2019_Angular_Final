import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { NgForm } from '@angular/forms';

import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public employee = [];

  constructor(private employeeservice: EmployeeService,private router: Router) 
  {}

  onSubmit(loginform: NgForm) {
    this.employee.forEach((key) => {
     if(loginform.value.email===key.email && loginform.value.password===key.password)
     {
       console.log("Login Success");
       this.router.navigate(['/Signin',key.name] );

     }
     
    });


  }

  ngOnInit() {
    this.employeeservice.getEmployees().subscribe((data) => {
      Object.keys(data).forEach((key) => {
        this.employee.push(data[key])
      });
    });

  }

}
