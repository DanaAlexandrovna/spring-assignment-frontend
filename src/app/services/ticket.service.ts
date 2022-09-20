import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket, TicketUpdate} from "../common/ticket";


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

  public add(user: Ticket): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/add`, user);
  }

  public update(id: number, user: TicketUpdate): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/update`, user);
  }

  public delete(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
}
