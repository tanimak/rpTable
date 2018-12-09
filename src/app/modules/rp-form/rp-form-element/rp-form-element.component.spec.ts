import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpFormElementComponent } from './rp-form-element.component';

describe('RpFormElementComponent', () => {
  let component: RpFormElementComponent;
  let fixture: ComponentFixture<RpFormElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpFormElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpFormElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
