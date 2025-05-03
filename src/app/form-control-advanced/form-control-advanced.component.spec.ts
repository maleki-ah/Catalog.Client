import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlAdvancedComponent } from './form-control-advanced.component';

describe('FormControlAdvancedComponent', () => {
  let component: FormControlAdvancedComponent;
  let fixture: ComponentFixture<FormControlAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControlAdvancedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormControlAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
