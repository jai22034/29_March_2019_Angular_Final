import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private myservice: DataService,private builder:FormBuilder) { 
    this.form = this.builder.group({
      Merchant:[''],
      Total:[''],
      Status:[''],
      Date:[''],
      Comment:['']
    })
  }
  value:any=null;
  public form :FormGroup

  Add(){
    this.value = this.myservice.getdata();
    this.myservice.adddata(this.form.value)

    //this.value.push();
  }
  ngOnInit() {
    this.myservice.setdata();
  }

}
