import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, NgForm} from '@angular/forms';
import {ExpenseService} from '../expense.service'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private expenseservice:ExpenseService ,private builder:FormBuilder ) {
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

  }

}
