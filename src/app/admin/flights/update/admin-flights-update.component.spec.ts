import {AdminFlights} from "../admin-flights.component";
import {AdminFlightsUpdate} from "./admin-flights-update.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";

describe('AdminFlights', () => {
  let component: AdminFlightsUpdate;
  let fixture: ComponentFixture<AdminFlightsUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFlightsUpdate ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdminFlightsUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
