import { TestBed } from '@angular/core/testing';

import { PasswordService } from './password.service';

describe('PasswordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasswordService = TestBed.get(PasswordService);
    expect(service).toBeTruthy();
  });

  it('should return true given a valid password', () => {
    const passwordToCheck: string = "#MyPa$$word1!";
    expect(PasswordService.validatePasswordMeetsRequirements(passwordToCheck)).toBeTruthy();
  });

  it('should return false for a non-complex password', () => {
    const passwordToCheck: string = "password";
    expect(PasswordService.validatePasswordMeetsRequirements(passwordToCheck)).toBeFalsy();
  });
});
