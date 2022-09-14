import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddresses } from './admin-addresses.component';

describe('AdminAddresses', () => {
  let component: AdminAddresses;
  let fixture: ComponentFixture<AdminAddresses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddresses ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddresses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
