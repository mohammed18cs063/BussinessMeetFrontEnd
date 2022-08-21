import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedEventsComponent } from './booked-events.component';

describe('BookedEventsComponent', () => {
  let component: BookedEventsComponent;
  let fixture: ComponentFixture<BookedEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
