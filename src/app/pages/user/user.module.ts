import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserReportsComponent } from './user-reports/user-reports.component';
import { PrimeModule } from 'src/app/prime/prime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserListComponent,
    AddUserComponent,
    UserReportsComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    PrimeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
