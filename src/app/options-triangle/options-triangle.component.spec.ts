import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsTriangleComponent } from './options-triangle.component';

describe('OptionsTriangleComponent', () => {
  let component: OptionsTriangleComponent;
  let fixture: ComponentFixture<OptionsTriangleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsTriangleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsTriangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
