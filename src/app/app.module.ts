import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {TicketService} from "./services/ticket.service";
// @ts-ignore
import { LoginUserComponent } from './login/login-user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import {AdminUsers} from "./admin/users/admin-users.component";
import {AdminAddresses} from "./admin/addresses/admin-addresses.component";
import {AdminUsersUpdate} from "./admin/users/update/admin-users-update.component";
import {AdminAddressesUpdate} from "./admin/addresses/update/admin-addresses-update.component";
import {TicketsBookComponent} from "./tickets/book/tickets-book.component";
import {TicketsListComponent} from "./tickets/tickets-list.component";
// TODO always add the components you use to declarations:
@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginUserComponent,
    HomePageComponent,
    AdminUsers,
    AdminUsersUpdate,
    AdminAddresses,
    AdminAddressesUpdate,
    TicketsListComponent,
    TicketsBookComponent,

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
export class AppModule { }
