import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketRequestComponent } from './basket-request.component';

describe('BasketRequestComponent', () => {
  let component: BasketRequestComponent;
  let fixture: ComponentFixture<BasketRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
