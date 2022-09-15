import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginUserComponent} from "./login/login-user.component";
import {RegisterUserComponent} from "./register-user/register-user.component";
import {TicketsListComponent} from "./tickets-list/tickets-list.component";
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
import {BrowserModule} from "@angular/platform-browser";
import {AdminUsersUpdate} from "./admin/users/update/admin-users-update.component";
// // TODO airports, aircrafts etc   but you must be aware that airports should reference a address (foreign key) so you must use a html select
// import {AdminAirports} from './admin/users/users.component'
// import {AdminAddresses} from './admin/users/users.component'
// // TODO and after you create the components, you must add them to the routes


const routes: Routes = [
  {path: 'admin/users', component: AdminUsers},
  {path: 'admin/users/update/:id', component: AdminUsersUpdate},
  {path: 'admin/addresses', component: AdminAddresses},
  {path: 'login', component: LoginUserComponent},
  {path: 'register', component: RegisterUserComponent},
  {path: 'tickets', component: TicketsListComponent},
  {path: 'home', component: HomePageComponent},
  {path:'', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],

})
export class AppRoutingModule { }
