import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router) { 
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
      
        
            // check if route is restricted by role
            if (this.authService.UserRoles().includes('admin')) {
                // authorised so return true
                return true;
            }

             // role not authorised so redirect to home page
            this.router.navigate(['/denied']);
            return false;
          }
}