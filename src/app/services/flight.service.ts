import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Flight, FlightUpdate} from "../common/ticket";

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private baseUrl = "http://localhost:8080/flights";

  constructor(private httpClient: HttpClient) {
  }

  public get(): Observable<any> {
    return this.httpClient.get<Flight[]>(`${this.baseUrl}/all`);
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<Flight>(`${this.baseUrl}/${id}`);
  }

  public add(flight: Flight): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/add`, flight);
  }

  public update(id: number, flight: FlightUpdate): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/update`, flight);
  }

  public delete(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
}
