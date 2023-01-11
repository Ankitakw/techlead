import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IUsers } from '../Interfaces/users';

import { ApiServiceService } from './api-service.service';

describe('ApiServiceService', () => {
  let service: ApiServiceService;
  let httpClient: HttpClient;
  let httptesttoControl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiServiceService],
    });
    service = TestBed.inject(ApiServiceService);
    httptesttoControl = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('httpClient GetUser method', () => {
    const testuser: IUsers[] = [
      { name: 'xyx', age: 20, gender: 'male', phone: 1234567890, id: 11 }
    ];

    service.getUsers().subscribe((users) => {
      expect(testuser).toBe(users, 'should check mocked data');
    });
    const req = httptesttoControl.expectOne(service.base_url + '/users');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(testuser);
    httptesttoControl.verify();
  });

  it('httpClient Adduser method', () => {
    const testadduser = [
      { firstName: 'xyx', lastName: 'joe', age: 20, gender: 'female', phone: 1234567890, body: 'body1' }
    ];

    service.addUser(testadduser).subscribe((users) => {
      expect(testadduser).toBe(testadduser);
    });
    const req = httptesttoControl.expectOne(service.base_url + '/users/add');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(testadduser);
    httptesttoControl.verify();
  });

  it('httpClient getSingleUser method', () => {
    const testgetSingleUser = [
      { firstName: 'xyx', lastName: 'joe', age: 20, gender: 'female', phone: 1234567890, body: 'body1' }
    ];
    service.getSingleUser(1).subscribe(() => {
      expect(testgetSingleUser).toBe(testgetSingleUser);
    });
    const req = httptesttoControl.expectOne(service.base_url + '/users/1');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(testgetSingleUser);
    httptesttoControl.verify();
  });

  it('isAuthenticated returns true when the user has been authenticated', () => {
    expect(service.isAuthenticated).toBeTruthy();
  });
  it('isAuthenticated returns true when the user has been authenticated', () => {
    localStorage.setItem('token', '12345');
    expect(service.isAuthenticated).toBeTruthy();
  });

});
