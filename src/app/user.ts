export class User {
  id: 3;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roleType: string;
  locked: boolean;
  enabled: boolean;
  tickets: any[]; // TODO use actual tickets ??
  username: string;
  authorities: UserAuthority[];
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  accountNonLocked: boolean;
}
export class UserUpdate {
  id: 3;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roleType: string;
  locked: boolean;
  enabled: boolean;
  username: string;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  accountNonLocked: boolean;
}

export class UserAuthority {

  authority: string  // ADMIN, USER

}


