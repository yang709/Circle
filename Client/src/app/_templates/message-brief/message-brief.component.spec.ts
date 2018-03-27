import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBriefComponent } from './message-brief.component';

describe('MessageBriefComponent', () => {
  let component: MessageBriefComponent;
  let fixture: ComponentFixture<MessageBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
