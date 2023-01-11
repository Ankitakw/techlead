import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserReportsComponent } from './user-reports.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';
describe('UserReportsComponent', () => {
  let component: UserReportsComponent;
  let fixture: ComponentFixture<UserReportsComponent>;
  let ApiService: ApiServiceService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ApiServiceService],
      declarations: [UserReportsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserReportsComponent);
    component = fixture.componentInstance;
    ApiService = TestBed.inject(ApiServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
