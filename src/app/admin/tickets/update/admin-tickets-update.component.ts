import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {CommonUtil} from "../../../services/commonUtil";
import {TicketService} from "../../../services/ticket.service";


import { FlightService } from 'src/app/services/flight.service';
import { User } from 'src/app/common/user';
import { Aircraft } from 'src/app/common/aircraft';
import { UserService } from 'src/app/services/user.service';
import { AircraftService } from 'src/app/services/aircraft.service';
import { Flight, TicketUpdate } from 'src/app/common/ticket';


@Component({
  selector: 'admin-users-update',
  templateUrl: './admin-tickets-update.component.html',
  styleUrls: ['./admin-tickets-update.component.css']
})

export class AdminTicketsUpdate implements OnInit {


  ticket: TicketUpdate;
  id!: number;

  flight: Flight[];
  user: User[];
  aircraft: Aircraft[];
  


  constructor(private ticketService: TicketService,
              private flightService: FlightService,
              private userService: UserService,
              private aircraftService: AircraftService,
              private router: Router,
              private route: ActivatedRoute,
              public commonUtil: CommonUtil) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // load the possible flightes for update (and for fillinf the select options)
    this.flightService.get().subscribe(
      (data: Flight[]) => {
        if (data) {
          //? here is
          for (const flight of data) {
            delete flight['@id']
            // delete flight.ticket
          }
          this.flight = data as Flight[];
        }
      }
    )
    this.loadById(this.id);
  }

  loadById(id: number) {
    this.ticketService.getById(id).subscribe(
      (data: any) => {
        if (data) {
          //? here is
          delete data['@id']
          delete data.ticket
          this.ticket = data as TicketUpdate;
          console.log(`fetched ticket by id=${id}`, this.ticket)
        }
      }
    )
  }

  update() {
    console.log(this.ticket)
    this.ticketService.update(this.id, this.ticket).subscribe(data => {
      console.log(data);
    })
  }

  
  delete(id: number) {
    this.ticketService.delete(id).subscribe(data => {
      console.log(data);
    })
  }
}