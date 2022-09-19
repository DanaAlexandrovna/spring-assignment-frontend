import {Component, OnInit} from '@angular/core';
import {TicketService} from "../../services/ticket.service";
import {Router} from '@angular/router';
import {CommonUtil} from "../../services/commonUtil";
import {User} from "../../common/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})

export class AdminUsers implements OnInit {


  users!: User[];


  constructor(private userService: UserService,
              private router: Router,
              public commonUtil: CommonUtil) {
  }

  ngOnInit(): void {
    this.loadAll();

  }

  loadAll() {

    this.userService.get().subscribe(
      (data: any) => {
        console.log('fetched all users:', data) // TODO no data found?
        if (data) {
          this.users = data;
        }
      }
    )
  }


  delete(id: number) {
    let doDelete = confirm('PERMANENTLY delete the user?')
    console.log('doDelete', doDelete)
    if (doDelete) {
      this.userService.delete(id).subscribe(data => {
        console.log(data);
        this.users = this.users.filter(
          user => user.id === id
        )
      })
    }
  }

  update(id: number) {
    this.router.navigate(['admin/users/update', id]);
  }

  // details(id: number) {
  //
  //   this.router.navigate(['viewBookDetails', id]);
  //
  // }

}
