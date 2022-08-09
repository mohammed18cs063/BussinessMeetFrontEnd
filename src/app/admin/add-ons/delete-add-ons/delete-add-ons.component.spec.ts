import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAddOnsComponent } from './delete-add-ons.component';

describe('DeleteAddOnsComponent', () => {
  let component: DeleteAddOnsComponent;
  let fixture: ComponentFixture<DeleteAddOnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAddOnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAddOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
