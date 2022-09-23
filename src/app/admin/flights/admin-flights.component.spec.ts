import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFlights } from './admin-flights.component';

describe('AdminAddresses', () => {
  let component: AdminFlights;
  let fixture: ComponentFixture<AdminFlights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFlights ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFlights);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
