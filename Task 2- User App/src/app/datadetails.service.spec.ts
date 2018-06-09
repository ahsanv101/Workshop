import { TestBed, inject } from '@angular/core/testing';

import { DatadetailsService } from './datadetails.service';

describe('DatadetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatadetailsService]
    });
  });

  it('should be created', inject([DatadetailsService], (service: DatadetailsService) => {
    expect(service).toBeTruthy();
  }));
});
