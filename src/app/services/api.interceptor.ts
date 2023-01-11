import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class APIInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = (localStorage.getItem('tokendata'));
    let jwtToken = req.clone({
      setHeaders: {
        Authorization: `bearer ${token}`
      }
    })
    return next.handle(jwtToken);
  }
}
