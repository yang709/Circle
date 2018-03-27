import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedTabComponent } from './accepted-tab.component';

describe('AcceptedTabComponent', () => {
  let component: AcceptedTabComponent;
  let fixture: ComponentFixture<AcceptedTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
