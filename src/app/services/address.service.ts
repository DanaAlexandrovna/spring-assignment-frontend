import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Address, AddressUpdate} from "../address";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseUrl = "http://localhost:8080/addresses";

  constructor(private httpClient: HttpClient) {
  }

  public get(): Observable<any> {
    // fetch(`${this.baseUrl}`)
    //   .then(res => res.json())
    //   .then(json => console.log(json as User[]))
    //   .catch(err => console.error(err));
    return this.httpClient.get<Address[]>(`${this.baseUrl}/all`);
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<Address>(`${this.baseUrl}/${id}`);
  }

  public add(address: Address): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/add`, address);
  }

  public update(id: number, address: AddressUpdate): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/update`, address);
  }

  public delete(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
}
