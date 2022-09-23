import { Component, OnInit } from '@angular/core';
import {User} from "../common/user";
import {RegisterService} from "../services/register.service";
import {Login} from "../common/login";
import {CommonUtil} from "../services/commonUtil";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  login:Login = new Login();

  constructor(private registerService: RegisterService,
              private commonUtil: CommonUtil,
              private router: Router) { }

  ngOnInit(): void {
  }

  loginRegister(){
    console.log(this.login);
    this.registerService.loginUser(this.login).subscribe(data=>{
      if (!data) {
        alert(`Login for ${this.login} did not succeed`)
        return;
      }
      console.log(data);
      this.commonUtil.setLoginUser(data);
      this.router.navigate(['/home']);
    });

    //, error=>alert("User is not register")
  }



}
