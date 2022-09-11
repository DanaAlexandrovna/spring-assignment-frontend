export class Ticket {
  id!: number;

  // TODO we probably also need the data from the relationships with other tables
  // DateTime
  // user_id,
  departure: string;
  from: string;
  to: string;
  address: string
  // user_id: number;
  // flight_id: number;
  // aircraft_id: number;
}

export class Address {
  id!: number;
  country: string;
  address: string;
  airport: string; // TODO SELECT
}
