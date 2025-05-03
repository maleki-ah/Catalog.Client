import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSyntaxComponent } from './basic-syntax.component';

describe('BasicSyntaxComponent', () => {
  let component: BasicSyntaxComponent;
  let fixture: ComponentFixture<BasicSyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicSyntaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
