import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoHomeComponent } from './photo-home.component';

describe('PhotoHomeComponent', () => {
  let component: PhotoHomeComponent;
  let fixture: ComponentFixture<PhotoHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoHomeComponent]
    });
    fixture = TestBed.createComponent(PhotoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
