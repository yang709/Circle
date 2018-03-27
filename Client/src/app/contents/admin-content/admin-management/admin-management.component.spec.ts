import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagementComponent } from './admin-management.component';

describe('AdminManagementComponent', () => {
  let component: AdminManagementComponent;
  let fixture: ComponentFixture<AdminManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
