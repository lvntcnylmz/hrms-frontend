import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  apiURL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {}

  getCities(): Observable<ListResponseModel<City>> {
    let newPath = this.apiURL + 'cities/getAll';
    return this.httpClient.get<ListResponseModel<City>>(newPath);
  }
}