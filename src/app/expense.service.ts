import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Expense } from './expense';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private _url: string = 'https://final-4184f.firebaseio.com/expense.json';

  constructor(private http: HttpClient) { }

  getEmployees() {

    return this.http.get(this._url);
  }
  setEmployee(empdata): Observable<Expense[]> {
    console.log(empdata);
    return this.http.post<Expense[]>(this._url, empdata);
  }
 
  deleteEmployee(data)
  {
    return this.http.delete(this._url,data);
  }


}
