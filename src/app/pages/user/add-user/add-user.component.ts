import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
})
export class AddUserComponent implements OnInit {
  userDetails: any;
  status: any;    
  message: any;

  constructor(private ApiService: ApiServiceService, private router: Router) { }
  error = null;
  addForm = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    age: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    gender: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
  })
  getControl(name: any): AbstractControl | null {
    return this.addForm.get(name);
  }
  submitAddForm() {
    const { firstName, lastName, age, phone, gender, email } = this.addForm.value;
    this.ApiService.addUser({ firstName, lastName, age, phone, gender, email }).
      subscribe((res: any) => {
        this.userDetails = res;
        this.router.navigate(['users']);
      }, (err) => {
        this.error = err.error.msg;
      });
  }
  ngOnInit(): void { }

}
