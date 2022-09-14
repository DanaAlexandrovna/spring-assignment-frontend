import {Component, OnInit} from '@angular/core';
import {Address, Ticket} from "../../common/ticket";
import {TicketService} from "../../services/ticket.service";
import {Router} from '@angular/router';
import {HttpErrorResponse} from "@angular/common/http";
import {CommonUtil} from "../../services/commonUtil";
import {PageEvent} from '@angular/material/paginator';
import {Review} from "../../common/review";

@Component({
  selector: 'admin-addresses',
  templateUrl: './admin-addresses.component.html',
  styleUrls: ['./admin-addresses.component.css']
})
export class AdminAddresses implements OnInit {

  allTickets!: Ticket[];
  // destination: string;

  // TODO for admin/addresses
  allAddresses!: Address[];

  // book!: Ticket; // delete it
  // PAGE_SIZE: number = 4;
  // totalData: number = 0;
  // currentPage: number = 0;
  // languages: any[] = new Ticket().language;
  // categories: any[] = new Ticket().category;
  // selectedLanguage: string = "";
  // selectedCategory: string = "";
  // searchType: string = "";


  constructor(private bookService: TicketService,
              private router: Router,
              public commonUtil: CommonUtil) {
  }

  ngOnInit(): void {
    this.loadTickets();

    // TODO tmp:
    this.allTickets = [
      {
        id: 1,
        // user_id: 1,
        departure: 'Oct 23rd 12:30 AM',
        from: 'Bergamo',
        to: 'Warsaw',
        address: 'BGY International Airport'
      },
      {
        id: 2,
        // user_id: 1,
        departure: 'Oct 27rd 8:31 AM',
        from: 'Warsaw',
        to: 'Bergamo',
        address: ''
      },
      {
        id: 3,
        // user_id: 2,
        departure: 'Nov 1st 12:30 AM',
        from: 'Vienna',
        to: 'Warsaw',
        address: ''
      },
      {
        id: 4,
        // user_id: 2,
        departure: 'Nov 2nd 2:30 AM',
        from: 'Warsaw',
        to: 'Helsinki',
        address: ''
      },
      {
        id: 5,
        // user_id: 3,
        departure: 'Nov 3rd 12:00 PM',
        from: 'Milano',
        to: 'Vienna',
        address: ''
      },
    ]

    this.allAddresses = [
      {
        id: 1,
        // user_id: 1,
        country: 'Poland',
        address: 'Warsaw',
        airport: 'WAW'
      },
      {
        id: 2,
        // user_id: 2,
        country: 'Italy',
        address: 'Milano',
        airport: 'MIL'
      },
      {
        id: 3,
        // user_id: 3,
        country: 'Italy',
        address: 'Bergamo',
        airport: 'BGY'
      }
    ]
  }

  loadTickets() {

    this.bookService.getTickets().subscribe(
      (data: any) => {
        console.log(data.content) // TODO no data found?
        if (data.content) {
          this.allTickets = data.content;
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
