import { Injectable } from '@angular/core';
import {Appointment} from "../model/appointment";
import {DataService} from "./data-service.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService extends DataService<Appointment> {

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'https://medmeet-api-production.up.railway.app/api/v1/appointments';
  }
}
