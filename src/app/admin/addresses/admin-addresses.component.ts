import {Component, OnInit} from '@angular/core';
import {Address, Ticket} from "../../common/ticket";
import {Router} from '@angular/router';
import {CommonUtil} from "../../services/commonUtil";
import {AddressService} from "../../services/address.service";

@Component({
  selector: 'admin-addresses',
  templateUrl: './admin-addresses.component.html',
  styleUrls: ['./admin-addresses.component.css']
})
export class AdminAddresses implements OnInit {

  allTickets!: Ticket[];
  // destination: string;

  // TODO for admin/addresses
  addresses!: Address[];


  constructor(private addressService: AddressService,
              private router: Router,
              public commonUtil: CommonUtil) {
  }

  ngOnInit(): void {
    // ???
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

    this.addresses = [
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

  // ?? or load Addresses
  loadTickets() {

    this.addressService.get().subscribe(
      (data: any) => {
        console.log('fetched all addresses:') // TODO no data found?
        if (data.content) {
          this.addresses = data.content;
        }
      }
    )


  }


  delete(id: number) {
    let doDelete = confirm('PERMANENTLY delete the address?')
    console.log('doDelete', doDelete)
    if (doDelete) {
      this.addressService.delete(id).subscribe(data => {
        console.log(data);
        this.addresses = this.addresses.filter(
          addresses => addresses.id === id
        )
      })
    }
  }

  update(id: number) {
    this.router.navigate(['admin/addresses/update', id]);
  }
}
