import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeContentComponent } from './notice-content.component';

describe('NoticeContentComponent', () => {
  let component: NoticeContentComponent;
  let fixture: ComponentFixture<NoticeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
