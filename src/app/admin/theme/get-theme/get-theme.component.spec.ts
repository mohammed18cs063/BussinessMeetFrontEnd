import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetThemeComponent } from './get-theme.component';

describe('GetThemeComponent', () => {
  let component: GetThemeComponent;
  let fixture: ComponentFixture<GetThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
