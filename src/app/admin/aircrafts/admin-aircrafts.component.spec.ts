import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAircrafts } from './admin-aircrafts.component';

describe('AdminAircrafts', () => {
  let component: AdminAircrafts;
  let fixture: ComponentFixture<AdminAircrafts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAircrafts ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAircrafts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
