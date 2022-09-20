import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket, TicketCreate, TicketUpdate} from "../common/ticket";


@Injectable({
  providedIn: 'root'
})

export class TicketService {

  private baseUrl = "http://localhost:8080/tickets";

  constructor(private httpClient: HttpClient) {
  }

  public get(): Observable<any> {
    return this.httpClient.get<Ticket[]>(`${this.baseUrl}/all`);
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<Ticket>(`${this.baseUrl}/${id}`);
  }

  public add(user: TicketCreate): Observable<Object> {
    let user_id = user.user.id;
    let aircraft_id = user.aircraft.id;
    let flight_id = user.flight.id;
    console.log(user)
    return this.httpClient.post(`${this.baseUrl}/add/${user_id}/${aircraft_id}/${flight_id}`, null);
  }

  public update(id: number, user: TicketUpdate): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/update`, user);
  }

  public delete(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
}
