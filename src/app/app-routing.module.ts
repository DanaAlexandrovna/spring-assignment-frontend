import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginUserComponent} from "./login-book/login-user.component";
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



const routes: Routes = [
  {path: 'login', component: LoginUserComponent},
  {path: 'register', component: RegisterUserComponent},
  {path: 'tickets', component: TicketsListComponent},
  {path: 'home', component: HomePageComponent},
  {path:'', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
