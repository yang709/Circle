import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitedTabComponent } from './invited-tab.component';

describe('InvitedTabComponent', () => {
  let component: InvitedTabComponent;
  let fixture: ComponentFixture<InvitedTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitedTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
