import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminAircraftsUpdate } from './admin-aircrafts-update.component';

describe('AdminAircrafts', () => {
  let component: AdminAircraftsUpdate;
  let fixture: ComponentFixture<AdminAircraftsUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAircraftsUpdate ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdminAircraftsUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
