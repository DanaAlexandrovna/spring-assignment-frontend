import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {HttpErrorResponse} from "@angular/common/http";
import {Ticket} from "../../common/ticket";
import {TicketService} from "../../services/ticket.service";
import {CommonUtil} from "../../services/commonUtil";
import {UserService} from "../../services/user.service";
import {User} from "../../common/user";


@Component({
  selector: 'app-search-book',
  templateUrl: './tickets-book.component.html',
  styleUrls: ['./tickets-book.component.css']
})
export class TicketsBookComponent implements OnInit {

  user!: User | null;
  ticket!: Ticket;

  // aircrafts: Aircraft[];
  // flights: Flight[];


  constructor(private ticketService: TicketService,
              private userService: UserService,
              // private aircraftService: AircraftService,
              // private flightService: FlightService,
              private router: Router,
              public commonUtil: CommonUtil) {
  }

  ngOnInit(): void {
    this.init();

  }

  init() {
    this.user = this.commonUtil.getLoginUser()
    this.ticket = new Ticket()

    console.log(this.user)
    console.log(this.ticket)
  }
}
