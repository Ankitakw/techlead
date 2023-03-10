import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsers } from '../Interfaces/users';
import { IUser } from '../Interfaces/users';
import { Router } from '@angular/router';

@Injectable()

export class ApiServiceService {

  constructor(private http: HttpClient, private route: Router) { }

  base_url = 'https://dummyjson.com';

  getUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(`${this.base_url}/users`);
  }
  getSingleUser(id: number): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.base_url}/users/${id}`)
  }

  addUser(body: any) {
    return this.http.post(`${this.base_url}/users/add`, body);
  }
  deleteUser(id: number) {
    return this.http.delete(`${this.base_url}/users/${id}`)
  }

  adminLogin(username: string, password: string) {
    return this.http.post(`${this.base_url}/auth/login`, { username, password });
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.route.navigate(['/loginpage'])
  }

  get isLoggedIn(): boolean {
    const adminDetail = localStorage.getItem('tokendata');
    return adminDetail ? true : false;
  }
  isAuthenticated() {
    return this.isLoggedIn;
  }
}
