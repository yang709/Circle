import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindcontactContentComponent } from './findcontact-content.component';

describe('FindcontactContentComponent', () => {
  let component: FindcontactContentComponent;
  let fixture: ComponentFixture<FindcontactContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindcontactContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindcontactContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
