import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable } from "rxjs";
import { Ticket } from "../common/ticket";
import { map } from "rxjs/operators";
import {Review} from "../common/review";
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private baseUrl="http://localhost:8080/users";

  constructor(private httpClient: HttpClient) { }

  public getTickets(): Observable<any> {
    return this.httpClient.get<User[]>(`${this.baseUrl}`);
  }
  public getTicket(id: number): Observable<any> {
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`);
  }

  // TODO CRUD for the other operations

}
