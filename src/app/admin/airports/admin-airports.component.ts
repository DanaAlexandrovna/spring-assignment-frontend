import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CommonUtil} from "../../services/commonUtil";
import {AirportService} from "../../services/airport.service";
import { Airport } from 'src/app/common/airport';

@Component({
  selector: 'admin-airports',
  templateUrl: './admin-airports.component.html',
  styleUrls: ['./admin-airports.component.css']
})
export class AdminAirports implements OnInit {


  airports!: Airport[];


  constructor(private airportService: AirportService,
              private router: Router,
              public commonUtil: CommonUtil) {
  }

  ngOnInit(): void {
    // ???
    this.loadTickets();

  }

  // ?? or load Flightes
  loadTickets() {

    this.airportService.get().subscribe(
      (data: any) => {
        if (data) {
          for (const airport of data) {
            airport.address_id = airport.address.id
          }
          console.log('fetched all airports:', data) // TODO no data found?
          this.airports = data;
        }
      }
    )
  }

  delete(id: number) {
    let doDelete = confirm('PERMANENTLY delete the airport?')
    console.log('doDelete', doDelete)
    if (doDelete) {
      this.airportService.delete(id).subscribe((data: any) => {
        console.log(data);
        this.airports = this.airports.filter(
          airports => airports.id === id
        )
      })
    }
  }

  update(id: number) {
    this.router.navigate(['admin/airports/update', id]);
  }
}