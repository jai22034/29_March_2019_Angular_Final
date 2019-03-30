import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url: string = 'https://final-4184f.firebaseio.com/person.json';



  constructor(private http: HttpClient) { }
  getEmployees(): Observable<Employee[]> {

    return this.http.get<Employee[]>(this._url);
  }
  setEmployee(empdata): Observable<Employee[]> {
    console.log(empdata);
    return this.http.post<Employee[]>(this._url, empdata);
  }
}
