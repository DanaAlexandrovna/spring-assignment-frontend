import {Component, OnInit} from '@angular/core';
import {TicketService} from "../../services/ticket.service";
import {Router} from '@angular/router';
import {CommonUtil} from "../../services/commonUtil";
import {User} from "../../user";

@Component({
  selector: 'admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})

export class AdminUsers implements OnInit {


  users!: User[];


  constructor(private userService: TicketService,
              private router: Router,
              public commonUtil: CommonUtil) {
  }

  ngOnInit(): void {
    this.loadTickets();

  }

  loadTickets() {

    this.bookService.getTickets().subscribe(
      (data: any) => {
        console.log(data.content) // TODO no data found?
        if (data.content) {
          this.users = data.content;
        }
      }
    )


  }


  // deleteBook(id: number) {
  //   this.bookService.deleteBook(id).subscribe(data => {
  //     console.log(data);
  //     this.getBooks();
  //   })
  // }
  //
  //
  // updateBook(id: number) {
  //   this.router.navigate(['updateBook', id]);
  // }
  //
  // bookDetails(id: number) {
  //   this.router.navigate(['viewBookDetails', id]);
  // }

}
