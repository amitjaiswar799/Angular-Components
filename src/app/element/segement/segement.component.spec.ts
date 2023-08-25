import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegementComponent } from './segement.component';

describe('SegementComponent', () => {
  let component: SegementComponent;
  let fixture: ComponentFixture<SegementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegementComponent]
    });
    fixture = TestBed.createComponent(SegementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
