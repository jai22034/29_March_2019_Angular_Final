import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, NgForm, Validators} from '@angular/forms';
import {ExpenseService} from '../expense.service';

import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private expenseservice:ExpenseService ,private builder:FormBuilder,private dialog :MatDialogRef<SidenavComponent >) {
    this.form = this.builder.group({
      merchant:['',[Validators.required,Validators.minLength(4)]],
      total:['',[Validators.required]],
      status:['',Validators.required],
      date:['',Validators.required],
      comment:['']
    })

}


get merchant()
{
  return this.form.get('merchant');
}
get total()
{
  return this.form.get('total');
}
get status()
{
  return this.form.get('status');
}
get date()
{
  return this.form.get('date');
}
public form:FormGroup;
  

  ngOnInit() {
   
   
  }

  Add()
  {
    this.expenseservice.setEmployee(this.form.value).subscribe((res) => {
      console.log(res);
    })
    this.form.reset();
   
    this.onClose();

  }

  onClose()
  {
  this.form.reset();
  this.dialog.close();
  }
  onClear() {
    this.form.reset();
    }

}
