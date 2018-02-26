import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBodyComponent } from './form-body.component';

describe('FormBodyComponent', () => {
  let component: FormBodyComponent;
  let fixture: ComponentFixture<FormBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
