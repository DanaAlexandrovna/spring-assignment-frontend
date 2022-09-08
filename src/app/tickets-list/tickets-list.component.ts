import {Component, OnInit} from '@angular/core';
import {Ticket} from "../common/ticket";
import {TicketService} from "../services/ticket.service";
import {Router} from '@angular/router';
import {HttpErrorResponse} from "@angular/common/http";
import {CommonUtil} from "../services/commonUtil";
import {PageEvent} from '@angular/material/paginator';
import {Review} from "../common/review";

@Component({
  selector: 'app-search-book',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css', './search-by-category.css']
})
export class TicketsListComponent implements OnInit {

  allTickets!: Ticket[];
  // destination: string;

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
  }

  loadTickets() {

    this.bookService.getTickets().subscribe(
      (data: any) => {
        this.allTickets = data.content;
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
