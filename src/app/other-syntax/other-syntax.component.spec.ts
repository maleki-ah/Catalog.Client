import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSyntaxComponent } from './other-syntax.component';

describe('OtherSyntaxComponent', () => {
  let component: OtherSyntaxComponent;
  let fixture: ComponentFixture<OtherSyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherSyntaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
