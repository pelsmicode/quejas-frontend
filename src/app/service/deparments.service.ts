import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../model/deparment';

@Injectable({
  providedIn: 'root'
})
export class DeparmentsService {
  url: string = environment.baseUrl + 'deparment';

  constructor(private http: HttpClient) { }

  getDepartment() : Observable<Department[]> {
    return this.http.get<Department[]>(this.url);
  }
}
