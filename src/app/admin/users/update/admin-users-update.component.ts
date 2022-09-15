import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {UserUpdate} from "../../../user";
import {UserService} from "../../../services/user.service";
import {CommonUtil} from "../../../services/commonUtil";


@Component({
  selector: 'admin-users-update',
  templateUrl: './admin-users-update.component.html',
  styleUrls: ['./admin-users-update.component.css']
})

export class AdminUsersUpdate implements OnInit {


  user: UserUpdate;
  id!: number;


  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              public commonUtil: CommonUtil) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.loadById(this.id);
  }

  loadById(id: number) {

    this.userService.getById(id).subscribe(
      (data: any) => {
        if (data) {
          delete data.authorities
          delete data.tickets
          this.user = data as UserUpdate;
          console.log(`fetched user by id=${id}`, this.user) // TODO no data found?
        }
      }
    )


  }


  update() {
    console.log(this.user)
    this.userService.update(this.id, this.user).subscribe(data => {
      console.log(data);
    })
  }



}
