import { Injectable } from '@angular/core';
import {DataService} from "./data-service.service";
import {HttpClient} from "@angular/common/http";
import {Doctor} from "../model/doctor";

@Injectable({
  providedIn: 'root'
})
export class DoctorsService extends DataService<Doctor> {

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:8105/api/v1/doctors';
  }
}
