import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {CommonUtil} from "../../../services/commonUtil";
import {FlightService} from "../../../services/flight.service";

import { AddressService } from 'src/app/services/address.service';

import { AirportService } from 'src/app/services/airport.service';
import { Airport, AirportNoString, FlightUpdate } from 'src/app/common/ticket';


@Component({
  selector: 'admin-flights-update',
  templateUrl: './admin-flights-update.component.html',
  styleUrls: ['./admin-flights-update.component.css']
})

export class AdminFlightsUpdate implements OnInit {

  flight: FlightUpdate;
  id!: number;

  airports: AirportNoString[];


  constructor(private flightService: FlightService,
              private airportService: AirportService,
              private router: Router,
              private route: ActivatedRoute,
              public commonUtil: CommonUtil) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // load the possible aiports for update (and for fillinf the select options)
    this.airportService.get().subscribe(
      (data: Airport[]) => {
        if (data) {
          //? here is
          for (const airports of data) {
            delete airports['@id']
            // delete airports.flight
          }
          this.airports = data as AirportNoString[];

          console.log(this.airports);
          
        }
      }
    )
    this.loadById(this.id);
  }

  loadById(id: number) {
    this.flightService.getById(id).subscribe(
      (data: any) => {
        if (data) {
          //? here is
          delete data['@id']
          delete data.flight
          this.flight = data as FlightUpdate;
          console.log(`fetched flight by id=${id}`, this.flight)
        }
      }
    )
  }

  update() {
    console.log(this.flight)
    delete this.flight['tickets']
    
    this.flightService.update(this.id, this.flight).subscribe(data => {
      console.log(data);
    })
  }
}