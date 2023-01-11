import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user-reports',
  templateUrl: './user-reports.component.html',
  providers: [ApiServiceService]
})
export class UserReportsComponent implements OnInit {
  userDetails: any;
  id: any;
  getSingleUser$: Subscription | undefined;

  constructor(public _ApiService: ApiServiceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: any) => {
      this.id = data.id
      this.loadUser(data.id)
    });
  }
  loadUser(id: string): void {
    this.getSingleUser$ = this._ApiService.getSingleUser(this.id).
      subscribe((data: any) => {
        this.userDetails = data;
        console.log("user", this.userDetails);
      });
  }

  ngOnDestroy(): void {
    this.getSingleUser$?.unsubscribe()
  }


  delete() {
    this._ApiService.deleteUser(this.id).
      subscribe((data) => {
      })
  }
}