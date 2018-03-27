import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitlistTabComponent } from './waitlist-tab.component';

describe('WaitlistTabComponent', () => {
  let component: WaitlistTabComponent;
  let fixture: ComponentFixture<WaitlistTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitlistTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitlistTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
