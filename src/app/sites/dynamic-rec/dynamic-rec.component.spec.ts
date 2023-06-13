import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRecComponent } from './dynamic-rec.component';

describe('DynamicRecComponent', () => {
  let component: DynamicRecComponent;
  let fixture: ComponentFixture<DynamicRecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicRecComponent]
    });
    fixture = TestBed.createComponent(DynamicRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
