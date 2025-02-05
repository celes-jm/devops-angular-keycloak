import { TestBed } from '@angular/core/testing';

import { AngularKeycloakService } from './angular-keycloak.service';

describe('AngularKeycloakService', () => {
  let service: AngularKeycloakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularKeycloakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
