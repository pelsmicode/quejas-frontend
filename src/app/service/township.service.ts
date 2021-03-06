import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Township } from '../model/township';

@Injectable({
  providedIn: 'root'
})
export class TownshipService {
  url: string = environment.baseUrl + 'township';

  constructor(private http: HttpClient) { }

  getTownshipByDeparmentId(id: any): Observable<Township[]> {
    let url = this.url + `/deparment/${id}`
    return this.http.get<Township[]>(url)
  }
}
