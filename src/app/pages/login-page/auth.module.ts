import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './login-page.component';
import { PrimeModule } from 'src/app/prime/prime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiServiceService]
})
export class AuthModule { }
