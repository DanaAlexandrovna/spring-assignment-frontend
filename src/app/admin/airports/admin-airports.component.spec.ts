import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAirports } from './admin-airports.component';

describe('AdminAddresses', () => {
  let component: AdminAirports;
  let fixture: ComponentFixture<AdminAirports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAirports ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAirports);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
