import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFoodMenuComponent } from './get-food-menu.component';

describe('GetFoodMenuComponent', () => {
  let component: GetFoodMenuComponent;
  let fixture: ComponentFixture<GetFoodMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetFoodMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetFoodMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
