import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoComponent } from './pho.component';

describe('PhoComponent', () => {
  let component: PhoComponent;
  let fixture: ComponentFixture<PhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoComponent]
    });
    fixture = TestBed.createComponent(PhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
