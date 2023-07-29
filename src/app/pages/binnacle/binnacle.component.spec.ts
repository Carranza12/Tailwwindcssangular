import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinnacleComponent } from './binnacle.component';

describe('BinnacleComponent', () => {
  let component: BinnacleComponent;
  let fixture: ComponentFixture<BinnacleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BinnacleComponent]
    });
    fixture = TestBed.createComponent(BinnacleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
