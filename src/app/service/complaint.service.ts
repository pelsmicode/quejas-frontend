import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Complaint } from '../model/complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  url: string = environment.baseUrl + 'complaint';

  constructor(private http: HttpClient) { }

  getComplaintMain(): Observable<Complaint[]> {
    const url: string = this.url + '/main';
    return this.http.get<Complaint[]>(url);
  }

  getPersonComplaint(): Observable<number> {
    const url: string = this.url + '/person';
    return this.http.get<number>(url);
  }

  getCompanyComplaint(): Observable<number> {
    const url: string = this.url + '/company'
    return this.http.get<number>(url);
  }
}
