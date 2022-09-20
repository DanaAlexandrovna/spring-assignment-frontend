import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Address, Airport, Flight, Ticket} from "../common/ticket";
import {TicketService} from "../services/ticket.service";
import {CommonUtil} from "../services/commonUtil";
import {User} from "../common/user";

@Component({
  selector: 'app-search-book',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {

  tickets!: Ticket[];
  user!: User | null;


  constructor(private ticketService: TicketService,
              private router: Router,
              public commonUtil: CommonUtil) {
  }

  ngOnInit(): void {
    this.load();

  }

  //
  // // recursively look for the key:
  // findVal(object: any, key: string, outObject: any) {
  //
  //   // console.log(key, object)
  //   Object.keys(object).some((k) => {
  //     if (k === '@id' && object['@id'] == key) {
  //       Object.assign(outObject, object)
  //       // outObject.update(object);
  //     }
  //     if (object[k] && typeof object[k] === 'object') {
  //       this.findVal(object[k], key, outObject);
  //     }
  //   });
  //
  // }

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

  load() {
    this.user = this.commonUtil.getLoginUser()

    this.ticketService.get().subscribe(
      (data: any) => {


        if (data) {

          this.loadAtIds(data)

          console.log('ID map:', this.identityMap)
          this.tickets = [];
          for (const ticket of data) {
            if (typeof ticket === typeof '') {
              this.tickets.push(
                this.identityMap[ticket]
              )
            } else {
              this.tickets.push(ticket)
            }
          }
          console.log('tickets:', this.tickets)
        }

        // filter tickets by userId
        console.log(this.user)
        this.tickets = this.tickets
          .filter(ticket => {
            // find user:
            let ticketUser: User = (typeof ticket.user == typeof '') ? this.identityMap[ticket.user as string] : ticket.user as User
            return ticketUser.id == this.user?.id
          })


        // find necessary data for printing the tickets:
        // (from airport, to airport, price)
        // , and enabling delete (id)

        console.log('tickets with more data:' )
        for (const ticket of this.tickets) {
          // set departure
          if (typeof ticket.flight == typeof '') {
            ticket.flight = this.identityMap[ticket.flight as string];
          }
          let isoDate = (ticket.flight as Flight).departure;
          ticket.departure = new Date(isoDate).toTimeString()

          // set from and to, which are the airport names:
          // if toAirport or formAirport are not set, set them right now:
          if (typeof ticket.flight == typeof {}) {
            if (typeof (ticket.flight as Flight).fromAirport == typeof '') {
              (ticket.flight as Flight).fromAirport = this.identityMap[(ticket.flight as Flight).fromAirport as string]
            }
            if (typeof (ticket.flight as Flight).toAirport == typeof '') {
              (ticket.flight as Flight).toAirport = this.identityMap[(ticket.flight as Flight).toAirport as string]
            }
          }
          ticket.from = ((ticket.flight as Flight).fromAirport as Airport).name
          ticket.to = ((ticket.flight as Flight).toAirport as Airport).name

          // set address
          let fromAirport: Airport = (ticket.flight as Flight).fromAirport as Airport
          if(typeof fromAirport.address == typeof '') {
            fromAirport.address = this.identityMap[fromAirport.address as string]
          }
          let address = fromAirport.address as Address
          ticket.address = `${address.country}, ${address.address}`

          console.log(ticket.departure, ticket.from, ticket.to, ticket.address)
        }
      }
    )


  }


  delete(id: number) {
    this.ticketService.delete(id).subscribe(data => {
      console.log(data);
      this.tickets = this.tickets
        .filter(ticket => ticket.id != id);
    })
  }


  update(id: number) {
    this.router.navigate(['tickets/update', id]);
  }

  // details(id: number) {
  //   this.router.navigate(['tickets/details', id]);
  // }


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
}
