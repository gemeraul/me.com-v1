import { TestBed } from '@angular/core/testing';

import { CycleItemsService } from './cycle-items.service';

describe('CycleItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CycleItemsService = TestBed.get(CycleItemsService);
    expect(service).toBeTruthy();
  });
});
