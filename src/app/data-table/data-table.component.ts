import { Component, OnInit, ViewChild } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {ExpenseService} from '../expense.service';
import {FormControl} from '@angular/forms';
import {MatTableDataSource, MatSort, MatDialogConfig} from '@angular/material';
import {MatDialog,MatDialogModule} from '@angular/material'
import { DataSource } from '@angular/cdk/table';
import { SidenavComponent } from '../sidenav/sidenav.component';
import{AuthService} from '../auth.service';




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
  dataSource:MatTableDataSource<any>;  
  displayedColumns = ['Date','Merchant','Total','Status','Comment','actions'];
  @ViewChild(MatSort) sort:MatSort;

fromFilter = new FormControl('');
toFilter = new FormControl('');
minFilter = new FormControl('');
maxFilter = new FormControl('');
merchantFilter = new FormControl('');


checked;

  
  constructor(public authService: AuthService, private ExpenseService: ExpenseService,private route:ActivatedRoute,private router:Router,private dialog : MatDialog) {
  
   }
  private employee=[];
  private name:string;



  ngOnInit() {
    let name1=this.route.snapshot.paramMap.get('name')
    this.name=name1;
    this.ExpenseService.getEmployees().subscribe((data) => {
      console.log(data);
      Object.keys(data).forEach((key) => {
        this.employee.push(data[key]);
      });
      this.dataSource = new MatTableDataSource(this.employee);
      this.dataSource.sort=this.sort;
      console.log(this.dataSource)
   

  
    });
    
 
  } 
 Logout()
 {
   this.authService.logout();
   this.router.navigate(['/login']);
 }
OnSearchClear1()
{
  
    this.minKey=0;
    this.maxKey=0;
  
      this.applyFilter1();

    
}
applyFilter1()
{
  this.dataSource.data=this.employee;
var x = this.dataSource.filteredData.filter(item=> item.total >=this.minKey && item.total<=this.maxKey)
 this.dataSource.data=x;
 console.log(this.dataSource);

 if(!!this.minKey==false || !!this.maxKey==false)
 {
   this.dataSource.data=this.employee;
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
    dialogConfig.width= "60%";
    this.dialog.open(SidenavComponent,dialogConfig);

  }
  onDelete($key){
    if(confirm('Are you sure to delete this record ?')){
     
    this.ExpenseService.deleteEmployee($key);
    }

}
}
