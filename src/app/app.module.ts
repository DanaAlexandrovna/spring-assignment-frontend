import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegisterUserComponent} from './register-user/register-user.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TicketService} from "./services/ticket.service";
// @ts-ignore
import {LoginUserComponent} from './login/login-user.component';
import {HomePageComponent} from './home-page/home-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {AdminUsers} from "./admin/users/admin-users.component";
import {AdminAddresses} from "./admin/addresses/admin-addresses.component";
import {AdminUsersUpdate} from "./admin/users/update/admin-users-update.component";
import {AdminAddressesUpdate} from "./admin/addresses/update/admin-addresses-update.component";
import {TicketsBookComponent} from "./tickets/book/tickets-book.component";
import {TicketsListComponent} from "./tickets/tickets-list.component";
import {AdminAircrafts} from "./admin/aircrafts/admin-aircrafts.component";
import {AdminAircraftsUpdate} from "./admin/aircrafts/update/admin-aircrafts-update.component";
import {AdminAirports} from "./admin/airports/admin-airports.component";
import {AdminAirportsUpdate} from "./admin/airports/update/admin-airports-update.component";
import { AdminFlights } from './admin/flights/admin-flights.component';
import { AdminFlightsUpdate } from './admin/flights/update/admin-flights-update.component';
import { AdminTickets } from './admin/tickets/admin-tickets.component';
import { AdminTicketsUpdate } from './admin/tickets/update/admin-tickets-update.component';


// TODO always add the components you use to declarations:
@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginUserComponent,
    HomePageComponent,
    AdminAddresses,
    AdminAddressesUpdate,
    AdminAircrafts,
    AdminAircraftsUpdate,
    AdminAirports,
    AdminAirportsUpdate,
    AdminUsers,
    AdminUsersUpdate,

    TicketsListComponent,
    TicketsBookComponent,
    AdminFlights,
    AdminFlightsUpdate,
    AdminTickets,
    AdminTicketsUpdate,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,


  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
