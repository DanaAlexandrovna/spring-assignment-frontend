export class Address {
  id: number;
  country : string;
  address: string;
  airport?: object
// trebuie?  tickets: any[]; // TODO use actual tickets ??
}
export class AddressUpdate {
  id: number;
  country : string;
  address: string;
}
