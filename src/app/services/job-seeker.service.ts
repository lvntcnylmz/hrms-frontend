import { JobSeeker } from 'src/app/models/jobSeeker';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobSeekerService {
  apiURL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {}

  getJobSeekers(): Observable<ListResponseModel<JobSeeker>> {
    let newPath = this.apiURL + 'jobSeekers/';
    return this.httpClient.get<ListResponseModel<JobSeeker>>(newPath);
  }

  getJobSeekerById(id: number): Observable<SingleResponseModel<JobSeeker>> {
    let newPath = this.apiURL + 'jobSeekers/' + id;
    return this.httpClient.get<SingleResponseModel<JobSeeker>>(newPath);
  }
}
