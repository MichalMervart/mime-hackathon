import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSelectComponent } from './index-select.component';

describe('IndexSelectComponent', () => {
  let component: IndexSelectComponent;
  let fixture: ComponentFixture<IndexSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
