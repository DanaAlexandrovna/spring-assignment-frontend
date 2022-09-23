import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Flight, FlightUpdate } from 'src/app/common/ticket';
import {CommonUtil} from "../../services/commonUtil";
import {FlightService} from "../../services/flight.service";

@Component({
  selector: 'admin-flights',
  templateUrl: './admin-flights.component.html',
  styleUrls: ['./admin-flights.component.css']
})
export class AdminFlights implements OnInit {


  flights!: FlightUpdate[];


  constructor(private flightService: FlightService,
              private router: Router,
              public commonUtil: CommonUtil) {
  }

  ngOnInit(): void {
    // ???
    this.loadTickets();

  }

  // ?? or load Flightes
  
  identityMap: object = {};

  mapIdentityUsingAtId(object: any) {
    // console.log(key, object)
    Object.keys(object).some((k) => {
      if (k === '@id') {
        let atId = object[k];
        this.identityMap[atId] = object;
      }
      if (object[k] && typeof object[k] === 'object') {
        this.mapIdentityUsingAtId(object[k]);
      }
    });

  }

  private countAtIds(data: any): [number, Set<string>] {
    // console.log('here')
    let objects: object[] = Object.values(data);
    let lt = 0;

    while (lt < objects.length) {
      let obs = objects[lt];
      if (typeof obs == typeof {}) {
        // console.log(objects[lt], Object.values(objects[lt]));
        objects = [
          ...objects,
          ...Object.values(objects[lt])
        ]
      }
      lt++;

      // console.log(lt, objects.length)
    }

    let atIds = new Set<string>();

    // count different @id's
    for (const object of objects) {
      if (object['@id']) {
        atIds.add(object['@id'])
      }
    }

    // console.log(atIds)
    return [atIds.size, atIds];
  }

  
  private loadAtIds(data: object) {

    // use countAtIds and a sync wait function to create a list of all ids
    let [cntIds, ids] = this.countAtIds(data);

    // start filling the identity map:
    this.mapIdentityUsingAtId(data)
    // while you didn't fill all cntIds ids inside the identityMap,
    //  wait 10 more millis:
    while (Object.keys(this.identityMap).length < cntIds) {
      ((ms) => {
        let start = Date.now(), now = start;
        while (now - start < ms) {
          now = Date.now();
        }
      })(10)
    }
  }

  loadTickets() {

    this.flightService.get().subscribe(
      (data: any) => {
        if (data) {
          // console.log('fetched all flights:', data) // TODO no data found?

          this.loadAtIds(data)

          console.log('ID map:', this.identityMap)
          for(let i = 0; i < data.length; i++) {
            let flight = data[i];
            // load the real flights
            if (typeof flight == typeof '') {
              flight = this.identityMap[flight as string]
            }
            // load the real airports
            if (typeof flight.fromAirport == typeof '' ){
              flight.fromAirport = this.identityMap[flight.fromAirport as string]
            }
            if (typeof flight.toAirport == typeof '' ){
              flight.toAirport = this.identityMap[flight.toAirport as string]
            }
            data[i] = flight;
          }
          for (const flight of data) {
            // console.log(flight);
            // flight.address_id = flight.address.id
            flight.from_airport_id = flight.fromAirport.id;
            flight.to_airport_id = flight.toAirport.id;
          }
         
          this.flights = data as FlightUpdate[];
        }
      }
    )
  }

  delete(id: number) {
    let doDelete = confirm('PERMANENTLY delete the flight?')
    console.log('doDelete', doDelete)
    if (doDelete) {
      this.flightService.delete(id).subscribe((data: any) => {
        console.log(data);
        this.flights = this.flights.filter(
          flights => flights.id === id
        )
      })
    }
  }

  update(id: number) {
    this.router.navigate(['admin/flights/update', id]);
  }
}
