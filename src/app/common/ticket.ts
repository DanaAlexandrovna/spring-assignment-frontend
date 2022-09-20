// TODO tmp:
import {User} from "./user";

export class Address {
  id!: number;
  country: string;
  address: string;
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
// TODO end tmp

export class Ticket {
  id!: number;
  // filled by us:
  departure: string;
  from: string;
  to: string;
  address: string

  flight: Flight | string;
  user: User | string
}

export class TicketUpdate {
  id!: number;
  user_id!: number;
  flight_id!: number;
  aircraft_id!: number;
}
