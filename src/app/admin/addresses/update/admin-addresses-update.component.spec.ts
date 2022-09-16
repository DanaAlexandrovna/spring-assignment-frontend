import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AdminAddressesUpdate} from "./admin-addresses-update.component";

describe('AdminAddresses', () => {
  let component: AdminAddressesUpdate;
  let fixture: ComponentFixture<AdminAddressesUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddressesUpdate ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddressesUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
