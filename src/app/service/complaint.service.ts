import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../model/company';
import { Complaint } from '../model/complaint';
import { Person } from '../model/person';

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

  getPersonComplaint(): Observable<Person> {
    const url: string = this.url + '/person';
    return this.http.get<Person>(url);
  }

  getCompanyComplaint(): Observable<Company> {
    const url: string = this.url + '/company'
    return this.http.get<Company>(url);
  }

  saveComplaint(complaint: Complaint): Observable<Complaint> {
    return this.http.post<Complaint>(this.url, complaint);
  }
}
