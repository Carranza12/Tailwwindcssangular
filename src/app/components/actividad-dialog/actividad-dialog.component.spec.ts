import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadDialogComponent } from './actividad-dialog.component';

describe('ActividadDialogComponent', () => {
  let component: ActividadDialogComponent;
  let fixture: ComponentFixture<ActividadDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActividadDialogComponent]
    });
    fixture = TestBed.createComponent(ActividadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
