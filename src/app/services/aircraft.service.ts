import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Aircraft, AircraftUpdate} from "../common/aircraft";

@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  private baseUrl = "http://localhost:8080/aircrafts";

  constructor(private httpClient: HttpClient) {
  }

  public get(): Observable<any> {
    return this.httpClient.get<Aircraft[]>(`${this.baseUrl}/all`);
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<Aircraft>(`${this.baseUrl}/${id}`);
  }

  public add(airport: Aircraft): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/add`, airport);
  }

  public update(id: number, airport: AircraftUpdate): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/update`, airport);
  }

  public delete(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
}
