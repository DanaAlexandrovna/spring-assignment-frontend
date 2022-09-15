import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersUpdate } from './admin-users-update.component';

describe('AdminUsers', () => {
  let component: AdminUsersUpdate;
  let fixture: ComponentFixture<AdminUsersUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsersUpdate ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUsersUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
