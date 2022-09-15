import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {map} from "rxjs/operators";
import {User, UserUpdate} from "../user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/users";

  constructor(private httpClient: HttpClient) {
  }

  public get(): Observable<any> {
    // fetch(`${this.baseUrl}`)
    //   .then(res => res.json())
    //   .then(json => console.log(json as User[]))
    //   .catch(err => console.error(err));
    return this.httpClient.get<User[]>(`${this.baseUrl}`);
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`);
  }

  public add(user: User): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/add`, user);
  }
  public update(id: number, user: UserUpdate): Observable<Object>  {
    return this.httpClient.put(`${this.baseUrl}/update`, user);
  }
  public delete(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }

}
