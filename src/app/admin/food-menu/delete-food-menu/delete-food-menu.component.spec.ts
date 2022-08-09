import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFoodMenuComponent } from './delete-food-menu.component';

describe('DeleteFoodMenuComponent', () => {
  let component: DeleteFoodMenuComponent;
  let fixture: ComponentFixture<DeleteFoodMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFoodMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteFoodMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
