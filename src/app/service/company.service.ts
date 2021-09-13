import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  url: string = environment.baseUrl + 'company';

  constructor(private http: HttpClient) { }

  saveCompany(company:Company): Observable<Company> {
    return this.http.post<Company>(this.url, company);
  }
}
