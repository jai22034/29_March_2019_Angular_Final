import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = [{
    "Date":'1995/2/5',
    "Merchant":"Restraunt",
    "Total":200,
    "Status":"In progress",
    "Comment":"Expense from my business trip."
  },
]
dataArray:any= null;
setdata(){
  this.dataArray=this.data;
}
getdata(){
  return this.dataArray;
}
adddata(val:any){
  this.data.push(val);
}
}
