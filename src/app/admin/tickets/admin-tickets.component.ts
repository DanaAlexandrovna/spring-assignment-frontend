import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Aircraft } from 'src/app/common/aircraft';
import { Flight, Ticket, TicketUpdate } from 'src/app/common/ticket';
import { User } from 'src/app/common/user';
import {CommonUtil} from "../../services/commonUtil";
import {TicketService} from "../../services/ticket.service";


@Component({
  selector: 'admin-tickets',
  templateUrl: './admin-tickets.component.html',
  styleUrls: ['./admin-tickets.component.css']
})
export class AdminTickets implements OnInit {


  tickets!: TicketUpdate[];
  flight!: Flight[];
  user!: User[];
  aircraft!: Aircraft[];


  constructor(private ticketService: TicketService,
              private router: Router,
              public commonUtil: CommonUtil) {
  }

  ngOnInit(): void {
    // ???
    this.loadTickets();

  }

  // ?? or load Flightes
  loadTickets() {

    this.ticketService.get().subscribe(
      (data: any) => {
        if (data) {
          for (const ticket of data) {
            ticket.address_id = ticket.address.id
          }
          console.log('fetched all tickets:', data) // TODO no data found?
          this.tickets = data;
        }
      }
    )
  }

  delete(id: number) {
    let doDelete = confirm('PERMANENTLY delete the ticket?')
    console.log('doDelete', doDelete)
    if (doDelete) {
      this.ticketService.delete(id).subscribe((data: any) => {
        console.log(data);
        this.tickets = this.tickets.filter(
          tickets => tickets.id === id
        )
      })
    }
  }

  update(id: number) {
    this.router.navigate(['admin/tickets/update', id]);
  }
}