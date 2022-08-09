import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFoodMenuComponent } from './edit-food-menu.component';

describe('EditFoodMenuComponent', () => {
  let component: EditFoodMenuComponent;
  let fixture: ComponentFixture<EditFoodMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFoodMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFoodMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
