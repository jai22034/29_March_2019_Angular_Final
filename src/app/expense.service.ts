import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormGroup, FormControl, Validators } from "@angular/forms";

import { Observable } from 'rxjs';
import { Expense } from './expense';
import * as _ from 'lodash';



@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private _url: string = 'https://final-4184f.firebaseio.com/expense.json';

  constructor(private http: HttpClient) { }
  
  form: FormGroup =new FormGroup
  ({
    $key:new FormControl(null),
    merchant:new FormControl('',[Validators.required,Validators.minLength(4)]),
    total:new FormControl('',[Validators.required]),
    status:new FormControl('',[Validators.required]),
    date:new FormControl('',[Validators.required]),
    comment:new FormControl([''])
  })

  initializeFormGroup(){
  this.form.setValue({
    $key:null,
    merchant: '',
    total: '',
    status: '',
    date: '',
    comment: '1'
  });
}


  getEmployees():Observable <Expense[]>{

    return this.http.get<Expense[]>(this._url);
  }
  setEmployee(empdata): Observable<Expense[]> {
    console.log(empdata);
    return this.http.post<Expense[]>(this._url, empdata);
  }
  updateEmployee(employee)
  {
     this.http.put(this._url,employee.$key);
  }
 
  deleteEmployee(data)
  {
    return this.http.delete(this._url,data);
  }

  populateform(employee)
  {
    this.form.setValue(_.omit(employee));
    
  }

  

}
