import { TestBed } from '@angular/core/testing';

import { ContractPhonenumberService } from './contract-phonenumber.service';

describe('ContractPhonenumberService', () => {
  let service: ContractPhonenumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractPhonenumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
