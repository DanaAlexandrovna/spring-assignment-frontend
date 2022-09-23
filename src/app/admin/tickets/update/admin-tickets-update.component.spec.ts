import {AdminTickets} from "../admin-tickets.component";
import {AdminTicketsUpdate} from "./admin-tickets-update.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";

describe('AdminTickets', () => {
  let component: AdminTicketsUpdate;
  let fixture: ComponentFixture<AdminTicketsUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTicketsUpdate ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdminTicketsUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
