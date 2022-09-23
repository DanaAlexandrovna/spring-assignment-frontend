import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "../common/user";
import { RegisterService } from "../services/register.service";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: User = new User();

  constructor(private registerService: RegisterService,
      private router: Router) { }

  ngOnInit(): void {
  }
  userRegister() {
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe(data => {
      alert("Successfully User is register?" + data)
      this.router.navigate(['/home']);

    });

    //, error=>alert("User is not register")
  }


}
