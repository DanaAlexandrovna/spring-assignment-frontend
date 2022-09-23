import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginUserComponent} from "./login/login-user.component";
import {RegisterUserComponent} from "./register-user/register-user.component";
import {TicketsListComponent} from "./tickets/tickets-list.component";
import {TicketsBookComponent} from "./tickets/book/tickets-book.component";
import { ModalModule } from 'ngx-bootstrap/modal'
import {HomePageComponent} from "./home-page/home-page.component";

// import {CreateBookComponent} from "./create-book/create-book.component";
// import {SearchBookComponent} from "./search-book/search-book.component";
// import {UpdateBookComponent} from "./update-book/update-book.component";
// import {ViewBookDetailsComponent} from "./view-book-details/view-book-details.component";
// import {PaginationComponent} from "./pagination/pagination.component";
// import {SearchByLanguageComponent} from "./search-by-language/search-by-language.component";

import {AdminUsers} from './admin/users/admin-users.component'
import {AdminAddresses} from './admin/addresses/admin-addresses.component'
import {AdminAirports} from './admin/airports/admin-airports.component'
import {AdminAircrafts} from './admin/aircrafts/admin-aircrafts.component'
import {BrowserModule} from "@angular/platform-browser";
import {AdminUsersUpdate} from "./admin/users/update/admin-users-update.component";
import {AdminAddressesUpdate} from "./admin/addresses/update/admin-addresses-update.component";
import {AdminAirportsUpdate} from "./admin/airports/update/admin-airports-update.component";
import {AdminAircraftsUpdate} from "./admin/aircrafts/update/admin-aircrafts-update.component";
import { AdminFlights } from './admin/flights/admin-flights.component';
import { AdminFlightsUpdate } from './admin/flights/update/admin-flights-update.component';
import { AdminTickets } from './admin/tickets/admin-tickets.component';
import { AdminTicketsUpdate } from './admin/tickets/update/admin-tickets-update.component';
// // TODO airports, aircrafts etc   but you must be aware that airports should reference a address (foreign key) so you must use a html select
// import {AdminAirports} from './admin/users/users.component'
//import {AdminAddresses} from '.admin/addresses/update.component'
// // TODO and after you create the components, you must add them to the routes


const routes: Routes = [
  {path: 'admin/users', component: AdminUsers},
  {path: 'admin/users/update/:id', component: AdminUsersUpdate},
  {path: 'admin/addresses', component: AdminAddresses},
  {path: 'admin/addresses/update/:id', component: AdminAddressesUpdate},
  {path: 'admin/airports', component: AdminAirports},
  {path: 'admin/airports/update/:id', component: AdminAirportsUpdate},
  {path: 'admin/aircrafts', component: AdminAircrafts},
  {path: 'admin/aircrafts/update/:id', component: AdminAircraftsUpdate},
  {path: 'admin/flights', component: AdminFlights},
  {path: 'admin/flights/update/:id', component: AdminFlightsUpdate},
  {path: 'admin/tickets', component: AdminTickets},
  {path: 'admin/tickets/update/:id', component: AdminTicketsUpdate},
  {path: 'login', component: LoginUserComponent},
  {path: 'register', component: RegisterUserComponent},
  {path: 'tickets', component: TicketsListComponent},
  {path: 'tickets/book', component: TicketsBookComponent},
  {path: 'home', component: HomePageComponent},
  {path:'', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],

})
export class AppRoutingModule { }
