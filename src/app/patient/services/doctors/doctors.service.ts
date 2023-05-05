import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  basePath = 'http://localhost:3000/doctors';

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(this.basePath);
  }
}
