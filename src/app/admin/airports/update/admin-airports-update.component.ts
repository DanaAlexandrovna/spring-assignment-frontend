import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {CommonUtil} from "../../../services/commonUtil";
import {AirportService} from "../../../services/airport.service";
import {AirportUpdate} from "../../../airport";
import { Address } from 'src/app/address';
import { AddressService } from 'src/app/services/address.service';


@Component({
  selector: 'admin-users-update',
  templateUrl: './admin-airports-update.component.html',
  styleUrls: ['./admin-airports-update.component.css']
})

export class AdminAirportsUpdate implements OnInit {


  airport: AirportUpdate;
  id!: number;

  addresses: Address[];


  constructor(private airportService: AirportService,
              private addressService: AddressService,
              private router: Router,
              private route: ActivatedRoute,
              public commonUtil: CommonUtil) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // load the possible addresses for update (and for fillinf the select options)
    this.addressService.get().subscribe(
      (data: Address[]) => {
        if (data) {
          //? here is
          for (const address of data) {
            delete address['@id']
            delete address.airport
          }
          this.addresses = data as Address[];
        }
      }
    )

    this.loadById(this.id);
  }

  loadById(id: number) {
    this.airportService.getById(id).subscribe(
      (data: any) => {
        if (data) {
          //? here is
          delete data['@id']
          delete data.airport
          this.airport = data as AirportUpdate;
          console.log(`fetched airport by id=${id}`, this.airport) // TODO no data found?
        }
      }
    )
  }

  update() {
    console.log(this.airport)
    this.airportService.update(this.id, this.airport).subscribe(data => {
      console.log(data);
    })
  }
}
