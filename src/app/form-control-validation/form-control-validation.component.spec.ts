import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlValidationComponent } from './form-control-validation.component';

describe('FormControlValidationComponent', () => {
  let component: FormControlValidationComponent;
  let fixture: ComponentFixture<FormControlValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControlValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormControlValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
