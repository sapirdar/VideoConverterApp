import { TestBed } from '@angular/core/testing';

import { VideoConverterService } from './video-converter.service';

describe('VideoConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoConverterService = TestBed.get(VideoConverterService);
    expect(service).toBeTruthy();
  });
});
