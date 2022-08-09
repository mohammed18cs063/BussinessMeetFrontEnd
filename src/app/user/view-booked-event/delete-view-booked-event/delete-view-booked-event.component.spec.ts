import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteViewBookedEventComponent } from './delete-view-booked-event.component';

describe('DeleteViewBookedEventComponent', () => {
  let component: DeleteViewBookedEventComponent;
  let fixture: ComponentFixture<DeleteViewBookedEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteViewBookedEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteViewBookedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
