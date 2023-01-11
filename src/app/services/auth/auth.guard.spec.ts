import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiServiceService } from '../api-service.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiServiceService, AuthGuard],
    })
      .compileComponents();
    guard = TestBed.inject(AuthGuard);
  });
  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
