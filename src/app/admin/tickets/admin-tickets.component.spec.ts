import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTickets } from './admin-tickets.component';

describe('AdminAddresses', () => {
  let component: AdminTickets;
  let fixture: ComponentFixture<AdminTickets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTickets ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTickets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
