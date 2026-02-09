import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexStaticBackgroundComponent } from './index-static-background.component';

describe('IndexStaticBackgroundComponent', () => {
  let component: IndexStaticBackgroundComponent;
  let fixture: ComponentFixture<IndexStaticBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexStaticBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexStaticBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
