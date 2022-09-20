import {AdminAirports} from "../admin-airports.component";
import {AdminAirportsUpdate} from "./admin-airports-update.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";

describe('AdminAirports', () => {
  let component: AdminAirportsUpdate;
  let fixture: ComponentFixture<AdminAirportsUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAirportsUpdate ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdminAirportsUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
