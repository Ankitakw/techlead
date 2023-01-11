import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { of } from 'rxjs';
describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let ApiService: ApiServiceService;
  const userList = [{
    name: 'xyx', age: 20, gender: 'male', phone: 1234567890, id: 11
  }]
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ApiServiceService, useClass: ApiServiceService },
      ],
      declarations: [UserListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    ApiService = TestBed.inject(ApiServiceService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
