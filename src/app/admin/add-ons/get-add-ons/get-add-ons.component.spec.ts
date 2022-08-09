import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAddOnsComponent } from './get-add-ons.component';

describe('GetAddOnsComponent', () => {
  let component: GetAddOnsComponent;
  let fixture: ComponentFixture<GetAddOnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAddOnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAddOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
