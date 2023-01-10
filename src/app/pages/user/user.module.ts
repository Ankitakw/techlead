import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserReportsComponent } from './user-reports/user-reports.component';
import { PrimeModule } from 'src/app/prime/prime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
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
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiServiceService]
})
export class UserModule { }
