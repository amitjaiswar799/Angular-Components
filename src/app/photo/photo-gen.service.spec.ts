import { TestBed } from '@angular/core/testing';

import { PhotoGenService } from './photo-gen.service';

describe('PhotoGenService', () => {
  let service: PhotoGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
