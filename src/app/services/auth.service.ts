import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private keycloak : KeycloakService) {

  }

  UserRoles(): string[]{
    return this.keycloak.getUserRoles();
  }

  logout() {
   return this.keycloak.logout();
  }
}
