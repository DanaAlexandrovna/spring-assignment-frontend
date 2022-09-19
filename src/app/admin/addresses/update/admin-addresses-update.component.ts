import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {CommonUtil} from "../../../services/commonUtil";
import {AddressService} from "../../../services/address.service";
import {AddressUpdate} from "../../../common/address";


@Component({
  selector: 'admin-users-update',
  templateUrl: './admin-addresses-update.component.html',
  styleUrls: ['./admin-addresses-update.component.css']
})

export class AdminAddressesUpdate implements OnInit {


  address: AddressUpdate;
  id!: number;


  constructor(private addressService: AddressService,
              private router: Router,
              private route: ActivatedRoute,
              public commonUtil: CommonUtil) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.loadById(this.id);
  }

  loadById(id: number) {
    this.addressService.getById(id).subscribe(
      (data: any) => {
        if (data) {
          //? here is
          delete data.authorities
          delete data.tickets
          this.address = data as AddressUpdate;
          console.log(`fetched address by id=${id}`, this.address) // TODO no data found?
        }
      }
    )
  }

  update() {
    console.log(this.address)
    this.addressService.update(this.id, this.address).subscribe(data => {
      console.log(data);
    })
  }
}
