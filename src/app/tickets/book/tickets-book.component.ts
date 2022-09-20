import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {HttpErrorResponse} from "@angular/common/http";
import {Flight, FlightNoString, Ticket} from "../../common/ticket";
import {TicketService} from "../../services/ticket.service";
import {CommonUtil} from "../../services/commonUtil";
import {UserService} from "../../services/user.service";
import {User, UserUpdate} from "../../common/user";
import {Aircraft} from "../../common/aircraft";
import {AircraftService} from "../../services/aircraft.service";
import {FlightService} from "../../services/flight.service";
import {Address} from "../../common/address";
import {AirportService} from "../../services/airport.service";
import {Airport} from "../../common/airport";


@Component({
  selector: 'app-search-book',
  templateUrl: './tickets-book.component.html',
  styleUrls: ['./tickets-book.component.css']
})
export class TicketsBookComponent implements OnInit {

  user!: User;
  ticket!: Ticket;

  // select a departure airport
  fromAirportId: number;
  fromAirport: Airport;
  // we filter the destination airports:
  toAirports: Airport[];
  toAirportId: number; // the chosen destination
  // we show the flights between fromAirportId and toAirportId
  searchedFlights: FlightNoString[]

  // load flights, but also store which airports have direct flights
  flights: Flight[];
  hasDirectFlight: { [airportId: number]: Set<number> }

  aircrafts: Aircraft[];
  airports: Airport[];


  constructor(private ticketService: TicketService,
              private userService: UserService,
              private aircraftService: AircraftService,
              private airportService: AirportService,
              private flightService: FlightService,
              private router: Router,
              public commonUtil: CommonUtil) {
  }

  ngOnInit(): void {
    this.init();

  }

  fromAirportIdChanged() {
    this.airports.forEach(airport => {
      if (airport.id == this.fromAirportId) {
        this.fromAirport = airport;
      }
    })
    if (!this.fromAirport) {
      console.error('Airport not found')
    } else {
      // console.log(this.fromAirport)

      // console.log(this.hasDirectFlight)

      this.toAirports = this.airports
        .filter(toAirport => {
          return this.hasDirectFlight[this.fromAirport.id].has(toAirport.id)
        } /*Exista un zbor intre cele doua aeroporturi? */)
    }
  }

  init() {
    let nullableUser: User | null = this.commonUtil.getLoginUser()
    if (nullableUser == null) {
      this.router.navigate(['/login'])
    }
    this.user = this.commonUtil.getLoginUser() as User

    this.ticket = new Ticket()

    // load all flights and aircrafts
    this.loadFlightsAndMarkDirectFlights()
    this.loadAircrafts()
    this.loadAirports()

    setTimeout(() => {
      console.log('ticket:', this.ticket)
      console.log('user:', this.user)
      console.log('flights:', this.flights)
      console.log('airports:', this.airports)
      console.log('aircrafts:', this.aircrafts)
    }, 1000)


  }

  private loadAircrafts() {
    this.aircraftService.get().subscribe(
      (data: Aircraft[]) => {
        if (data) {
          // //? here is
          // for (const address of data) {
          //   delete address['@id']
          //   delete address['airport']
          // }
          this.aircrafts = data as Aircraft[];
        }
      }
    )
  }


  // COMMON with the other tickets component:
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

  private loadFlightsAndMarkDirectFlights() {
    this.flightService.get().subscribe(
      (data: (Flight | string)[]) => {
        if (data) {

          this.loadAtIds(data)
          // console.log(this.identityMap)

          // create hasDirectFlights
          this.hasDirectFlight = {}

          this.flights = [];
          for (const flight of data) {
            // console.log(flight)
            let realFlight: Flight = (typeof flight == typeof '') ? this.identityMap[flight as string] : flight
            this.flights.push(realFlight); // SET THE REAL FLIGHT OBJECT

            let from: Airport = (typeof realFlight.fromAirport == typeof '') ? this.identityMap[realFlight.fromAirport as string] : realFlight.fromAirport
            let to: Airport = (typeof realFlight.toAirport == typeof '') ? this.identityMap[realFlight.toAirport as string] : realFlight.toAirport

            // console.log('from,to:', from, to)

            let idDeparture: number = from.id
            let idDestination: number = to.id

            // console.log(idDeparture, idDestination)
            // console.log(this.hasDirectFlight)

            if (!this.hasDirectFlight[idDeparture]) {
              this.hasDirectFlight[idDeparture] = new Set([
                idDestination
              ])
            } else {
              this.hasDirectFlight[idDeparture].add(idDestination)
            }
          }

        }
      }
    )
  }

  private loadAirports() {
    this.airportService.get().subscribe(
      (data: Airport[]) => {
        if (data) {
          // //? here is
          // for (const address of data) {
          //   delete address['@id']
          //   delete address['airport']
          // }
          this.airports = data as Airport[];
        }
      }
    )
  }

  loadSearchedFlights() {
    this.searchedFlights = this.flights
      .map((flight) => {
        flight.fromAirport = (typeof flight.fromAirport == typeof '') ? this.identityMap[flight.fromAirport as string] : flight.fromAirport
        flight.toAirport = (typeof flight.toAirport == typeof '') ? this.identityMap[flight.toAirport as string] : flight.toAirport

        return flight as FlightNoString;
      })
      .filter(flight => {
        // console.log(flight.fromAirport.id, flight.toAirport.id)
        // console.log(this.fromAirportId, this.toAirportId)

        return flight.fromAirport.id == this.fromAirportId &&
          flight.toAirport.id == this.toAirportId

      })
      .sort((flight1, flight2) => {
        let date1 = new Date(flight1.departure),
          date2 = new Date(flight2.departure);

        return (date1 < date2) ? -1 : 1;
      })

  }

  bookFlight(flight: FlightNoString) {
    let aircraft = {...this.aircrafts[0]}// random
    let flight2 = {...flight}
    let user: UserUpdate = {...this.user}

    delete aircraft['@id']
    delete flight2['@id']
    delete flight2.fromAirport['@id']
    delete flight2.toAirport['@id']
    delete flight2.fromAirport.address['@id']
    delete flight2.toAirport.address['@id']
    delete user['@id']
    delete user['authorities']

    console.log(aircraft, flight2, user)

    this.ticketService.add(
      {
        aircraft: aircraft, // random
        flight: flight2,
        user: user,
      }
    ).subscribe(
      (data: any) => {
        if (data) {
          console.log(data)
        }
      }
    )
  }
}
