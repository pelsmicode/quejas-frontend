import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  url: string = environment.baseUrl + 'person';

  constructor(private http: HttpClient) { }

  savePerson(person: Person):Observable<Person> {
    return this.http.post<Person>(this.url, person);
  }
}
