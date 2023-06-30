import { Injectable } from '@angular/core';
import {DataService} from "./data-service.service";
import {Payment} from "../model/payment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class PaymentService extends DataService<Payment> {
  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'https://medmeet-api-production.up.railway.app/api/v1/payments';
  }
}
