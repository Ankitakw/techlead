import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [`
  .ptable th td {
    width: max-content;
  }
  `]
})
export class UserListComponent implements OnInit {
  users :any;
  loading: boolean = true;
  name: any;
  sum: any;
  constructor(private _ApiService: ApiServiceService, private _router:Router) { }

  ngOnInit(): void {
    
     this._ApiService.getUsers().
     subscribe((data:any) => {
       this.users = data.users;
       console.log("users", this.users);
       this.loading = false;
    });
      // then((users: User[]) => this.users = users);
  }
  get totalRows(): number {
    return this.users.length;
  }

search(){
  if(this.name ==""){
    this.ngOnInit();
  }else{
    this.users = this.users.filter((res: { name: string; }) => {
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }
};


}


