
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { LogoutComponent } from './logout/logout.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DeniedComponent } from './denied/denied.component';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8081/auth',
        realm: 'service',
        clientId: 'security'
      },
      initOptions: {
        onLoad: 'login-required',
        redirectUri: "http://localhost:4200/auth-callback",
        flow: "standard"
      }
    });
}

@NgModule({
  declarations: 
  [AppComponent,
  EmployeeListComponent,
  CreateEmployeeComponent,
  AuthCallbackComponent,
  LogoutComponent,
  EmployeeDetailsComponent,
  DeniedComponent,
  ],
  imports: [AppRoutingModule, HttpClientModule, BrowserModule, FormsModule, KeycloakAngularModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
    AuthGuardService,
    AuthService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}