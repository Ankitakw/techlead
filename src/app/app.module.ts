import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserReportsComponent } from './pages/user/user-reports/user-reports.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiServiceService } from './services/api-service.service';
import { PrimeModule } from './prime/prime.module';
import { AuthServiceService } from './services/auth/auth-service.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
import {MessageService} from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserReportsComponent,
    NavbarComponent,
    LoginPageComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PrimeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiServiceService, AuthServiceService, MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiServiceService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
