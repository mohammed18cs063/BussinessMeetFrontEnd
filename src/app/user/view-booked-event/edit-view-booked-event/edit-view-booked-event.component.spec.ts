import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditViewBookedEventComponent } from './edit-view-booked-event.component';

describe('EditViewBookedEventComponent', () => {
  let component: EditViewBookedEventComponent;
  let fixture: ComponentFixture<EditViewBookedEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditViewBookedEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditViewBookedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
