import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  session: any;
  constructor(private ApiService:ApiServiceService, private route:Router) { }

}
