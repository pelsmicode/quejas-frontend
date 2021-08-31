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
}
