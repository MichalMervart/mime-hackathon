import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCountdownComponent } from './index-countdown.component';

describe('IndexCountdownComponent', () => {
  let component: IndexCountdownComponent;
  let fixture: ComponentFixture<IndexCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexCountdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
