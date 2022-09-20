import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsBookComponent } from './tickets-book.component';

describe('BookListComponent', () => {
  let component: TicketsBookComponent;
  let fixture: ComponentFixture<TicketsBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
