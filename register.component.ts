import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from './confirm-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public employee = [];
 employeeform: FormGroup;
  constructor(private employeeservice: RegisterService, private formbuilder: FormBuilder,
              private router: Router ) { }

  ngOnInit() {
    this.employeeform = this.formbuilder.group({
      name: ['', Validators.required],
      UserId: ['', Validators.required],
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', Validators.required]
    },
    {
      validator: ConfirmPasswordValidator.MatchPassword
    });
    this.employeeservice.getEmployees().subscribe((data) => {
      Object.keys(data).forEach( (key) => {
        this.employee.push(data[key]);
      });
    });
  }
  get values() {
    return this.employeeform.controls;
  }

  onSubmit() {
    this.employeeservice.setEmployee(this.employeeform.value).subscribe((res) => {
      console.log(res);
    });
    this.employeeform.reset();
    this.router.navigate(['/']);
  }

}
