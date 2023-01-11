import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiServiceService } from './services/api-service.service';
import { PrimeModule } from './prime/prime.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { NgTemplateOutlet } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APIInterceptor } from './services/api.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    NgTemplateOutlet,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PrimeModule,
    ReactiveFormsModule,
    FormsModule
  ],

  providers: [ApiServiceService, MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
