import { Injectable } from '@angular/core';
import {DataService} from "./data-service.service";
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends DataService<User> {

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'https://medmeet-api-production.up.railway.app/api/v1/users';
  }
}
