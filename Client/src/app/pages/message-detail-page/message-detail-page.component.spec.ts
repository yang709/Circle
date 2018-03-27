import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDetailPageComponent } from './message-detail-page.component';

describe('MessageDetailPageComponent', () => {
  let component: MessageDetailPageComponent;
  let fixture: ComponentFixture<MessageDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
