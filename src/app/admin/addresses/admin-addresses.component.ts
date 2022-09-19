import {Component, OnInit} from '@angular/core';
import {Ticket} from "../../common/ticket";
import {Router} from '@angular/router';
import {CommonUtil} from "../../services/commonUtil";
import {AddressService} from "../../services/address.service";
import {Address} from "../../common/address";

@Component({
  selector: 'admin-addresses',
  templateUrl: './admin-addresses.component.html',
  styleUrls: ['./admin-addresses.component.css']
})
export class AdminAddresses implements OnInit {

  addresses!: Address[];


  constructor(private addressService: AddressService,
              private router: Router,
              public commonUtil: CommonUtil) {
  }

  ngOnInit(): void {
    // ???
    this.load();


  }

  // ?? or load Addresses
  load() {

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
