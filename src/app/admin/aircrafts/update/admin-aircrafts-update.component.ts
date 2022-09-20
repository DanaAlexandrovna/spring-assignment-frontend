import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import { AircraftUpdate } from 'src/app/aircraft';

import {AircraftService} from "../../../services/aircraft.service";
import {CommonUtil} from "../../../services/commonUtil";


@Component({
  selector: 'admin-aircrafts-update',
  templateUrl: './admin-aircrafts-update.component.html',
  styleUrls: ['./admin-aircrafts-update.component.css']
})

export class AdminAircraftsUpdate implements OnInit {


  aircraft: AircraftUpdate;
  id!: number;


  constructor(private aircraftService: AircraftService,
              private router: Router,
              private route: ActivatedRoute,
              public commonUtil: CommonUtil) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.loadById(this.id);
  }

  loadById(id: number) {

    this.aircraftService.getById(id).subscribe(
      (data: any) => {
        if (data) {
          delete data.authorities
          delete data.tickets
          this.aircraft = data as AircraftUpdate;
          console.log(`fetched aircraft by id=${id}`, this.aircraft) // TODO no data found?
        }
      }
    )
  }

  update() {
    console.log(this.aircraft)
    this.aircraftService.update(this.id, this.aircraft).subscribe(data => {
      console.log(data);
    })
  }
}
