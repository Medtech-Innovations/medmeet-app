import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get(`https://restcountries.com/v3.1/all`);
  }
}
