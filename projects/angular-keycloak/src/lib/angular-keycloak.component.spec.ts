import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularKeycloakComponent } from './angular-keycloak.component';

describe('AngularKeycloakComponent', () => {
  let component: AngularKeycloakComponent;
  let fixture: ComponentFixture<AngularKeycloakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularKeycloakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularKeycloakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
