import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalNetworkingComponent } from './global-networking.component';

describe('GlobalNetworkingComponent', () => {
  let component: GlobalNetworkingComponent;
  let fixture: ComponentFixture<GlobalNetworkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalNetworkingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalNetworkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
