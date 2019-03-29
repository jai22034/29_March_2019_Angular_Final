import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExpenseService} from '../expense.service';
import {FormControl} from '@angular/forms';
import {MatTableDataSource, MatSort} from '@angular/material';
import {MatDialog,MatDialogModule} from '@angular/material'
import { DataSource } from '@angular/cdk/table';
import { SidenavComponent } from '../sidenav/sidenav.component';



@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  
  searchKey: string;
  dataSource:MatTableDataSource<any>;  
  displayedColumns = ['Date','Merchant','Total','Status','Comment','actions'];
  @ViewChild(MatSort) sort:MatSort;

fromFilter = new FormControl('');
toFilter = new FormControl('');
minFilter = new FormControl('');
maxFilter = new FormControl('');
merchantFilter = new FormControl('');


filterValues = {
  date: '',
  merchant: '',
  total: '',
  status: '',
  comment:''
};

  
  constructor(private ExpenseService: ExpenseService,private router:ActivatedRoute,private dialog : MatDialog) {
  
   }
  private employee=[];
  private name:string;



  ngOnInit() {
    let name1=this.router.snapshot.paramMap.get('name')
    this.name=name1;
    this.ExpenseService.getEmployees().subscribe((data) => {
      console.log(data);
      Object.keys(data).forEach((key) => {
        this.employee.push(data[key]);
      });
      this.dataSource = new MatTableDataSource(this.employee);
      this.dataSource.sort=this.sort;
   

  
    });
    
 
  } 
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
 
  }
  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
  oncreate()
  {
    this.dialog.open(SidenavComponent);

  }


}
