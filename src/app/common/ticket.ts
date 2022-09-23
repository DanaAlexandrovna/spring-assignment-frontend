// TODO tmp:
import {User, UserUpdate} from "./user";
import {Aircraft} from "./aircraft";

export class Address {
  id!: number;
  country: string;
  address: string;
}

export class AirportNoString {
  id!: number;
  name: string;
  address: Address;
}
export class Airport {
  id!: number;
  name: string;
  address: Address | string;
}

export class Flight {
  id!: number;
  departure: string;
  fromAirport: Airport | string;
  toAirport: Airport | string;
}

export class FlightNoString {
  id!: number;
  departure: string;
  fromAirport: Airport;
  toAirport: Airport;
}

export class FlightUpdate {
  id!: number;
  departure: string; // a ISO formatted DateTime
  price: number;
  from_airport_id: number;
  to_airport_id: number;
}

// TODO end tmp

export class Ticket {
  id!: number;
  // filled by us:
  departure: string;
  from: string;
  to: string;
  address: string
  // same, but filled from hibernate
  flight: Flight | string;
  user: User | string
}


export class TicketCreate {
  // flight_id: number;
  // aircraft_id: number;
  // user_id: number;
  flight: Flight;
  user: UserUpdate;
  aircraft: Aircraft;
}

export class TicketUpdate {
  id!: number;
  user_id!: number;
  flight_id!: number;
  aircraft_id!: number;
}
