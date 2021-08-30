import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Branch } from '../model/diaco.branch';

@Injectable({
  providedIn: 'root'
})
export class DiacoBranchService {
  url = environment.baseUrl + 'diaco'

  constructor(private http:HttpClient) { }

  getDiacoBranch(): Observable<Branch[]> {
    return this.http.get<Branch[]>(this.url)
  }
}
