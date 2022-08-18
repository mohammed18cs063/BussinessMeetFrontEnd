import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookedEventComponent } from './edit-booked-event.component';

describe('EditBookedEventComponent', () => {
  let component: EditBookedEventComponent;
  let fixture: ComponentFixture<EditBookedEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBookedEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBookedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
