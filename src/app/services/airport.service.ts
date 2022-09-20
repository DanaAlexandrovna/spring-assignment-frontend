import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Airport, AirportUpdate} from "../common/airport";

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  private baseUrl = "http://localhost:8080/airports";

  constructor(private httpClient: HttpClient) {
  }

  public get(): Observable<any> {
    return this.httpClient.get<Airport[]>(`${this.baseUrl}/all`);
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<Airport>(`${this.baseUrl}/${id}`);
  }

  public add(airport: Airport): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/add`, airport);
  }

  public update(id: number, airport: AirportUpdate): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/update`, airport);
  }

  public delete(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
}
