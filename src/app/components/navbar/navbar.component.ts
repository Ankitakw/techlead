import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: any[] = [];
  constructor(private route:Router, private ApiService:ApiServiceService) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Logout', icon: 'pi pi-user-minus', command: () => {
          this.logoutUser();
      }}
  ];
  }

// update(){

// }
logoutUser(){
  localStorage.removeItem('tokendata');
  this.route.navigate(['/loginpage']);
}
login(){
  return this.ApiService.isAuthenticated();
}
}
