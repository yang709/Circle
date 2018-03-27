import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactprofilePageComponent } from './contactprofile-page.component';

describe('ContactprofilePageComponent', () => {
  let component: ContactprofilePageComponent;
  let fixture: ComponentFixture<ContactprofilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactprofilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactprofilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
