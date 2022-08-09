import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetViewBookedEventComponent } from './get-view-booked-event.component';

describe('GetViewBookedEventComponent', () => {
  let component: GetViewBookedEventComponent;
  let fixture: ComponentFixture<GetViewBookedEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetViewBookedEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetViewBookedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
