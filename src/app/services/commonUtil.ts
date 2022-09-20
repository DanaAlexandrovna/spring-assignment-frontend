import {Injectable} from "@angular/core";
import {User, UserAuthority} from "../common/user";

@Injectable({
  providedIn: 'root'
})

export class CommonUtil {
  private loginUser: User | null = null;

  private localstorageLoginKey: string = 'blue-sky-logged-user#2732';

  constructor() {
    console.log("here");
    if (localStorage.getItem(this.localstorageLoginKey)) {
      let user: any = localStorage.getItem(this.localstorageLoginKey);
      user = JSON.parse(user);
      if (user) {
        this.loginUser = user;
      }
    }
  }

  public setLoginUser(loginUser: any) {
    localStorage.setItem(this.localstorageLoginKey, JSON.stringify(loginUser));
    this.loginUser = loginUser;
  }

  public getLoginUser(): User | null {
    return this.loginUser;
  }

  public isAdminUser(): boolean {

    if (this.loginUser) {
      for (const auth of this.loginUser.authorities) {
        if (auth.authority === "ADMIN") {
          return true;
        }
      }
    }
    return false;
  }

  public logout() {
    localStorage.removeItem(this.localstorageLoginKey);
  }
}
