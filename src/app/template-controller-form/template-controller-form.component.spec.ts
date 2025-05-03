import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateControllerFormComponent } from './template-controller-form.component';

describe('TemplateControllerFormComponent', () => {
  let component: TemplateControllerFormComponent;
  let fixture: ComponentFixture<TemplateControllerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateControllerFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateControllerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
