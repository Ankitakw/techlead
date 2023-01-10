import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AbstractControl } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [ApiServiceService]
})
export class LoginPageComponent implements OnInit {
  adminDetails: any;
  status: any;
  message: any;

  constructor(private ApiService: ApiServiceService, private router: Router) { }
  error = null;
  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  })
  getControl(name: any): AbstractControl | null {
    return this.loginForm.get(name);
  }
  submitform() {
    const { username, password } = this.loginForm.value;
    this.ApiService.adminLogin(username || '', password || '').
      subscribe((res: any) => {
        this.adminDetails = res;
        localStorage.setItem('tokendata', (this.adminDetails.token));
        this.router.navigate(['user/users']);
      }, (err) => {
        this.error = err.error.msg;
        console.log(this.error);
      });
  }

  ngOnInit(): void {
    if (this.ApiService.isLoggedIn) {
      this.router.navigate(['user/users']);
    }
  }
  isAuth() {
    return this.ApiService.isLoggedIn;
  }

}

