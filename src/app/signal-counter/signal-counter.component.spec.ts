import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalCounterComponent } from './signal-counter.component';

describe('SignalCounterComponent', () => {
  let component: SignalCounterComponent;
  let fixture: ComponentFixture<SignalCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
