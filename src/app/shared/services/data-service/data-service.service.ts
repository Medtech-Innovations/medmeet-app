import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService<T> {

  constructor(private http: HttpClient) { }

  isEditMode = false;

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  getAll(basePath: string) {
    return this.http.get(basePath)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  create(item: T, basePath: string): Observable<T> {
    return this.http.post<any>(basePath, item);
  }

  delete(id: number, basePath: string){
    const url = `${basePath}/${id}`;
    console.log(url);
    this.http.delete<T>(url)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

}
