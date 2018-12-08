import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormBodyComponent } from './reactive-form-body.component';

describe('ReactiveFormBodyComponent', () => {
  let component: ReactiveFormBodyComponent;
  let fixture: ComponentFixture<ReactiveFormBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
