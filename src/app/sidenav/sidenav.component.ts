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

  constructor(private service:ExpenseService ,private dialog :MatDialogRef<SidenavComponent >) {
    

  }
  
form : FormGroup;

ngOnInit() {
this.form= this.service.form;
   }

  Add(form : NgForm)
  {
    if (!this.service.form.get('$key').value)
    {
    this.service.setEmployee(form.value).subscribe((res) => {
      console.log(res);
   })
  }
  else
  {
    this.service.updateEmployee(form.value);
  }
    form.reset();
    this.onClose();

  }
  get merchant()
  {
    return this.form.get('merchant');
  }
  get status()
  {
    return this.form.get('status');
  }
  get total()
  {
    return this.form.get('total');
  }
  get date()
  {
    return this.form.get('date');
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
