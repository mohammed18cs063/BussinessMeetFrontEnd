import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodMenuComponent } from './add-food-menu.component';

describe('AddFoodMenuComponent', () => {
  let component: AddFoodMenuComponent;
  let fixture: ComponentFixture<AddFoodMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFoodMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFoodMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
