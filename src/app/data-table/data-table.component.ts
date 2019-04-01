import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExpenseService} from '../expense.service';
import {FormControl} from '@angular/forms';
import {MatTableDataSource, MatSort, MatDialogConfig} from '@angular/material';
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
  fromKey:string;
  merchantKey:string;
  minKey:number;
  maxKey:number;
  range:number;
  toKey:number;
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
checked;

  
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
  OnSearchClear1()
  {
    this.minKey=0;
    this.maxKey=0;
  this.applyFilter1();
  }

  applyFilter1()
  {
  
  console.log(this.minKey,'hii')
  console.log(this.maxKey,'hlw')
      console.log("hgjhjh")
      this.dataSource.data = this.employee;
      var x=this.dataSource.filteredData.filter(item => item.total>=this.minKey && item.total<=this.maxKey);
      console.log(x);
      this.dataSource.data=x;
      console.log(this.dataSource)
  if(!!this.minKey==false || !!this.maxKey==false)
  {
    this.dataSource.data = this.employee;
  }
  }
  OnSearchClear2()
  {
    this.range=0;
    this.toKey=0;
  this.applyFilter2();
  }

  applyFilter2()
  {
      
      if(this.range<this.toKey)
      {
      this.dataSource.data = this.employee;
      var x=this.dataSource.filteredData.filter(item => item.date>=this.range && item.date<=this.toKey);
      console.log("here",x);
      this.dataSource.data=x;
      console.log(this.dataSource)
      }
          if(!!this.range==false || !!this.toKey==false)
           {
            console.log(this.range,'hii')
            console.log(this.toKey,'hlw')

            this.dataSource.data = this.employee;
            
   
          }
      
}



  onSearchClear() {
    if(this.searchKey)
    {
    this.searchKey = "";
    this.applyFilter();
    }
  
    else if (this.fromKey)
    {
      this.fromKey="";
      this.applyFilter();
    }
    else if (this.merchantKey)
    {
      this.merchantKey="";
      this.applyFilter();
    }
}
  applyFilter() {
    if(this.searchKey)
    {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
    }
    else if(this.fromKey)
    {
      this.dataSource.filter = this.fromKey.trim().toLowerCase();
    }
    else if(this.merchantKey)
    {
      this.dataSource.filter = this.merchantKey.trim().toLowerCase();
    }
   
  }
 
  oncreate()
  {
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.autoFocus=true;
    dialogConfig.width= "90%";
    this.dialog.open(SidenavComponent,dialogConfig);

  }


}
