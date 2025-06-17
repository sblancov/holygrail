import { TestBed } from '@angular/core/testing';

import { TogglesidebarService } from './togglesidebar.service';

describe('TogglesidebarService', () => {
  let service: TogglesidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TogglesidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
