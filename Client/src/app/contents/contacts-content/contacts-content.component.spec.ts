import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsContentComponent } from './contacts-content.component';

describe('ContactsContentComponent', () => {
  let component: ContactsContentComponent;
  let fixture: ComponentFixture<ContactsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
