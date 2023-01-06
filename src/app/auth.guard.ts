import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiServiceService } from './services/api-service.service';
import { AuthServiceService } from './services/auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthServiceService, private route: Router, private ApiService: ApiServiceService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("this.ApiService.isAuthenticated", this.ApiService.isAuthenticated);
    if (!this.ApiService.isAuthenticated()) {
      this.route.navigate(['loginpage']);
    }
    return true;
  }

}
