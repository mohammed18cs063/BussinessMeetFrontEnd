import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddOnsComponent } from './edit-add-ons.component';

describe('EditAddOnsComponent', () => {
  let component: EditAddOnsComponent;
  let fixture: ComponentFixture<EditAddOnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAddOnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAddOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
