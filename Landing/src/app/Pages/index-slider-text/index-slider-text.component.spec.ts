import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSliderTextComponent } from './index-slider-text.component';

describe('IndexSliderTextComponent', () => {
  let component: IndexSliderTextComponent;
  let fixture: ComponentFixture<IndexSliderTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexSliderTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexSliderTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
