import {Component, OnInit} from '@angular/core';
import {TicketService} from "../../services/ticket.service";
import {Router} from '@angular/router';
import {CommonUtil} from "../../services/commonUtil";
import {AircraftService} from "../../services/aircraft.service";
import { Aircraft } from 'src/app/common/aircraft';

@Component({
  selector: 'admin-aircrafts',
  templateUrl: './admin-aircrafts.component.html',
  styleUrls: ['./admin-aircrafts.component.css']
})

export class AdminAircrafts implements OnInit {

  aircrafts!: Aircraft[];


  constructor(private aircraftService: AircraftService,
              private router: Router,
              public commonUtil: CommonUtil) {
  }

  ngOnInit(): void {
    this.loadAll();

  }

  loadAll() {

    this.aircraftService.get().subscribe(
      (data: any) => {
        console.log('fetched all aircrafts:', data) // TODO no data found?
        if (data) {
          this.aircrafts = data;
        }
      }
    )
  }


  delete(id: number) {
    let doDelete = confirm('PERMANENTLY delete the aircraft?')
    console.log('doDelete', doDelete)
    if (doDelete) {
      this.aircraftService.delete(id).subscribe(data => {
        console.log(data);
        this.aircrafts = this.aircrafts.filter(
          aircraft => aircraft.id === id
        )
      })
    }
  }

  update(id: number) {
    this.router.navigate(['admin/aircrafts/update', id]);
  }

  // details(id: number) {
  //
  //   this.router.navigate(['viewBookDetails', id]);
  //
  // }

}
