import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { NgForm, FormGroup } from '@angular/forms';
import {AuthService} from '../auth.service';

import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public employee = [];


  constructor(private employeeservice: EmployeeService,private router: Router,public authService: AuthService) 
  {}

  onSubmit(loginform: NgForm) {
    this.employee.forEach((key) => {
     if(loginform.value.email===key.email && loginform.value.password===key.password)
     {

       console.log("Login Success");
       localStorage.setItem('isLoggedIn',"true");
       localStorage.setItem('token',loginform.value.email);
       this.router.navigate(['/Signin',key.name] );

     }
     
    });

     
  }

  ngOnInit() {
    if(localStorage.getItem('isLoggedIn')=="true"){
      this.router.navigate(['/Signin'] );
      console.log(localStorage.getItem('isLoggedIn'));
    }
    this.employeeservice.getEmployees().subscribe((data) => {
      Object.keys(data).forEach((key) => {
        this.employee.push(data[key])
      });
    });
     
  }
 logout(): void{

  console.log("Logout");
  this.authService.logout();
  this.router.navigate(['/login']);
 }
}
