import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tickets2Component } from './tickets-2.component';

describe('Tickets2Component', () => {
  let component: Tickets2Component;
  let fixture: ComponentFixture<Tickets2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tickets2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tickets2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
