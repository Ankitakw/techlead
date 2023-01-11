import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/Interfaces/users';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [ApiServiceService]
})
export class UserListComponent implements OnInit {
  users: [IUser] | [] = [];
  loading: boolean = true;
  name: any;
  sum: any;
  getUser$: Subscription | undefined;
  constructor(private ApiService: ApiServiceService,) { }

  ngOnInit(): void {
    this.loadUsers()
  }

  ngOnDestroy(): void {
    this.getUser$?.unsubscribe()
  }

  loadUsers(): void {
    this.getUser$ = this.ApiService.getUsers().
      subscribe((data: any) => {
        this.users = data.users;
        this.loading = false;
      });
  }
  get totalRows(): number {
    return this.users.length;
  }

}


