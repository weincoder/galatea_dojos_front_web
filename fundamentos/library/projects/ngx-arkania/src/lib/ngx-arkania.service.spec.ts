import { TestBed } from '@angular/core/testing';

import { NgxArkaniaService } from './ngx-arkania.service';

describe('NgxArkaniaService', () => {
  let service: NgxArkaniaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxArkaniaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
