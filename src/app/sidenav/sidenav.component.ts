import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, NgForm} from '@angular/forms';
import {ExpenseService} from '../expense.service';

import {MatDialogRef} from '@angular/material'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private expenseservice:ExpenseService ,private builder:FormBuilder,private dialog :MatDialogRef<SidenavComponent >) {
    this.form = this.builder.group({
      merchant:[''],
      total:[''],
      status:[''],
      date:[''],
      comment:['']
    })

}
public form:FormGroup;
  

  ngOnInit() {
   
   
  }

  Add(form : NgForm)
  {
    this.expenseservice.setEmployee(form.value).subscribe((res) => {
      console.log(res);
    })
    this.form.reset();
    this.onClose(form);

  }

  onClose(form : NgForm)
  {
  this.form.reset();
  this.dialog.close();
  }

}
